/**
 * gen-og-logo.mjs
 * Generates a high-contrast OG image from the Heuristic Labs logo.
 * Produces a 512×512 white-background PNG with the logo rendered in near-black.
 *
 * Run: node scripts/gen-og-logo.mjs
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const INPUT  = path.join(ROOT, "src", "assets", "logo (1).webp");
const OUTPUT = path.join(ROOT, "public", "og-logo.png");

const SIZE = 512;          // final canvas size
const LOGO = 360;          // logo rendered at this px inside the canvas

try {
  // 1. Load the original logo, resize it
  const logoBuffer = await sharp(INPUT)
    .resize(LOGO, LOGO, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer();

  // 2. Negate (invert) so the light-grey logo becomes dark on transparent,
  //    then re-composite onto a solid white canvas.
  //    We use a linear pipeline:
  //      - negate()     → turns light grey (#ccc) into dark grey (#333)
  //      - flatten()    → ensures any remaining transparency becomes white
  const darkLogo = await sharp(logoBuffer)
    .negate({ alpha: false })   // invert RGB only, keep alpha
    .toBuffer();

  // 3. Composite dark logo centred on a 512×512 white background
  const offset = Math.round((SIZE - LOGO) / 2);

  await sharp({
    create: {
      width: SIZE,
      height: SIZE,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 255 },
    },
  })
    .composite([{ input: darkLogo, left: offset, top: offset }])
    .png({ compressionLevel: 9 })
    .toFile(OUTPUT);

  console.log(`✅  OG logo saved → ${OUTPUT}`);
} catch (err) {
  console.error("❌  Failed:", err.message);
  process.exit(1);
}
