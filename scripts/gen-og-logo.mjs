/**
 * gen-og-logo.mjs
 * Generates:
 *   og-logo.png    — dark logo, transparent bg (fallback)
 *   favicon.svg    — adaptive SVG favicon: dark in light mode, white in dark mode
 *
 * Run: node scripts/gen-og-logo.mjs
 */

import sharp from "sharp";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const INPUT      = path.join(ROOT, "src", "assets", "logo (1).webp");
const OUT_PNG    = path.join(ROOT, "public", "og-logo.png");
const OUT_SVG    = path.join(ROOT, "public", "favicon.svg");

const SIZE = 512;
const LOGO = 480;
const offset = Math.round((SIZE - LOGO) / 2);

try {
  // 1. Resize logo with transparent bg
  const baseBuffer = await sharp(INPUT)
    .resize(LOGO, LOGO, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // 2. Dark (black) logo — negate RGB, keep alpha
  const darkLogo = await sharp(baseBuffer).negate({ alpha: false }).toBuffer();

  // 3. Save dark PNG (fallback favicon)
  await sharp({
    create: { width: SIZE, height: SIZE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: darkLogo, left: offset, top: offset }])
    .png({ compressionLevel: 9 })
    .toFile(OUT_PNG);

  // 4. Encode dark PNG as base64 for SVG embed
  const pngData = await fs.readFile(OUT_PNG);
  const b64 = pngData.toString("base64");

  // 5. Build SVG with embedded CSS media query:
  //    - Default (light mode): image renders normally → dark logo visible
  //    - Dark mode: CSS filter invert(1) flips it to white
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
  <style>
    .logo { filter: none; }
    @media (prefers-color-scheme: dark) {
      .logo { filter: invert(1); }
    }
  </style>
  <image class="logo" href="data:image/png;base64,${b64}" width="512" height="512"/>
</svg>`;

  await fs.writeFile(OUT_SVG, svg, "utf8");

  console.log(`Favicons saved:`);
  console.log(`  SVG (adaptive) → ${OUT_SVG}`);
  console.log(`  PNG (fallback) → ${OUT_PNG}`);
} catch (err) {
  console.error("Failed:", err.message);
  process.exit(1);
}
