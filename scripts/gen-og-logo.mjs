/**
 * gen-og-logo.mjs
 * Generates a favicon PNG from the Heuristic Labs logo.
 * Produces a 512×512 transparent-background PNG with the logo rendered in near-black.
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
const LOGO = 480;          // logo fills more of the canvas for better tab visibility

try {
  // 1. Load the original logo, resize it with transparent background
  const logoBuffer = await sharp(INPUT)
    .resize(LOGO, LOGO, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // 2. Negate (invert) RGB only so the light-grey logo becomes dark on transparent
  const darkLogo = await sharp(logoBuffer)
    .negate({ alpha: false })   // invert RGB only, keep alpha
    .toBuffer();

  // 3. Composite dark logo centred on a 512x512 fully transparent canvas
  const offset = Math.round((SIZE - LOGO) / 2);

  await sharp({
    create: {
      width: SIZE,
      height: SIZE,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },   // transparent
    },
  })
    .composite([{ input: darkLogo, left: offset, top: offset }])
    .png({ compressionLevel: 9 })
    .toFile(OUTPUT);

  console.log(`Favicon saved -> ${OUTPUT}`);
} catch (err) {
  console.error("Failed:", err.message);
  process.exit(1);
}
