/**
 * gen-og-logo.mjs
 * Generates two favicons from the Heuristic Labs logo:
 *   - favicon-light.png  → pure black logo on transparent  (for light-mode browsers)
 *   - favicon-dark.png   → pure white logo on transparent  (for dark-mode browsers)
 *   - og-logo.png        → dark logo on white background   (OG / social sharing)
 *
 * Run: node scripts/gen-og-logo.mjs
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const INPUT     = path.join(ROOT, "src", "assets", "logo (1).webp");
const OUT_LIGHT = path.join(ROOT, "public", "favicon-light.png");
const OUT_DARK  = path.join(ROOT, "public", "favicon-dark.png");
const OUT_OG    = path.join(ROOT, "public", "og-logo.png");

const SIZE   = 512;
const LOGO   = 480;
const offset = Math.round((SIZE - LOGO) / 2);

// Resize source to transparent letterbox
async function resizeLogo(size) {
  return sharp(INPUT)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
}

// Recolour every visible pixel to a given RGB, preserving alpha
function recolour(data, r, g, b) {
  const buf = Buffer.from(data);
  for (let i = 0; i < buf.length; i += 4) {
    if (buf[i + 3] > 0) {
      buf[i]     = r;
      buf[i + 1] = g;
      buf[i + 2] = b;
    }
  }
  return buf;
}

// Build a transparent canvas with the logo composited at centre
async function buildFavicon(rawBuf, width, height, outputPath) {
  const logoBuffer = await sharp(rawBuf, { raw: { width, height, channels: 4 } })
    .png()
    .toBuffer();

  await sharp({
    create: { width: SIZE, height: SIZE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: logoBuffer, left: offset, top: offset }])
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
}

try {
  // Resize once, get raw RGBA pixels
  const { data, info } = await resizeLogo(LOGO);

  // --- favicon-light.png: black logo (for light-mode browser tabs) ---
  const whiteLightBuf = recolour(data, 20, 20, 20);
  await buildFavicon(whiteLightBuf, info.width, info.height, OUT_LIGHT);
  console.log(`favicon-light.png -> ${OUT_LIGHT}`);

  // --- favicon-dark.png: white logo on transparent ---
  const whiteBuf = recolour(data, 255, 255, 255);
  await buildFavicon(whiteBuf, info.width, info.height, OUT_DARK);
  console.log(`favicon-dark.png  -> ${OUT_DARK}`);

  // --- og-logo.png: black logo on solid white background (social sharing) ---
  const ogLogoSize = 360;
  const ogOffset   = Math.round((SIZE - ogLogoSize) / 2);
  const { data: ogData, info: ogInfo } = await resizeLogo(ogLogoSize);
  const ogBlackBuf = recolour(ogData, 20, 20, 20);
  const ogLogoBuffer = await sharp(ogBlackBuf, { raw: { width: ogInfo.width, height: ogInfo.height, channels: 4 } })
    .png()
    .toBuffer();

  await sharp({
    create: { width: SIZE, height: SIZE, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 255 } },
  })
    .composite([{ input: ogLogoBuffer, left: ogOffset, top: ogOffset }])
    .png({ compressionLevel: 9 })
    .toFile(OUT_OG);
  console.log(`og-logo.png       -> ${OUT_OG}`);

} catch (err) {
  console.error("Failed:", err.message);
  process.exit(1);
}
