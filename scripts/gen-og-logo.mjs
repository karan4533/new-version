/**
 * gen-og-logo.mjs
 * Generates two favicon PNGs from the Heuristic Labs logo:
 *   og-logo-dark.png  — dark/black logo on transparent (for light mode tabs)
 *   og-logo-light.png — white logo on transparent      (for dark mode tabs)
 *
 * Run: node scripts/gen-og-logo.mjs
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const INPUT       = path.join(ROOT, "src", "assets", "logo (1).webp");
const OUT_DARK    = path.join(ROOT, "public", "og-logo-dark.png");   // black logo (light mode)
const OUT_LIGHT   = path.join(ROOT, "public", "og-logo-light.png");  // white logo (dark mode)
const OUT_DEFAULT = path.join(ROOT, "public", "og-logo.png");        // fallback (dark)

const SIZE = 512;
const LOGO = 480;
const offset = Math.round((SIZE - LOGO) / 2);

async function makeTransparentCanvas() {
  return sharp({
    create: {
      width: SIZE,
      height: SIZE,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  });
}

try {
  // Base: resize with transparent bg
  const baseBuffer = await sharp(INPUT)
    .resize(LOGO, LOGO, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Dark version: negate RGB → black logo on transparent (for light mode)
  const darkLogo = await sharp(baseBuffer).negate({ alpha: false }).toBuffer();
  await (await makeTransparentCanvas())
    .composite([{ input: darkLogo, left: offset, top: offset }])
    .png({ compressionLevel: 9 })
    .toFile(OUT_DARK);

  // Light version: keep original white logo on transparent (for dark mode)
  await (await makeTransparentCanvas())
    .composite([{ input: baseBuffer, left: offset, top: offset }])
    .png({ compressionLevel: 9 })
    .toFile(OUT_LIGHT);

  // Fallback: same as dark
  await (await makeTransparentCanvas())
    .composite([{ input: darkLogo, left: offset, top: offset }])
    .png({ compressionLevel: 9 })
    .toFile(OUT_DEFAULT);

  console.log(`Favicons saved:`);
  console.log(`  Light mode → ${OUT_DARK}`);
  console.log(`  Dark mode  → ${OUT_LIGHT}`);
  console.log(`  Fallback   → ${OUT_DEFAULT}`);
} catch (err) {
  console.error("Failed:", err.message);
  process.exit(1);
}
