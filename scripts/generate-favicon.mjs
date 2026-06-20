import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logoPath = path.join(root, 'src/assets/logo.png');
const outPath = path.join(root, 'public/favicon.png');

const size = 512;
const padding = 72;
const radius = 64;
const background = '#FBF8F1'; // --porcelain

const { data, info } = await sharp(logoPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Remove near-black background so the rings sit on the favicon background.
for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r < 42 && g < 42 && b < 42) {
    data[i + 3] = 0;
  }
}

const keyedLogo = await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .resize(size - padding * 2, size - padding * 2, { fit: 'contain' })
  .png()
  .toBuffer();

const roundedMask = await sharp(
  Buffer.from(
    `<svg width="${size}" height="${size}">
      <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white"/>
    </svg>`,
  ),
)
  .png()
  .toBuffer();

const base = await sharp({
  create: {
    width: size,
    height: size,
    channels: 4,
    background,
  },
})
  .composite([{ input: keyedLogo, gravity: 'center' }])
  .png()
  .toBuffer();

await sharp(base)
  .composite([{ input: roundedMask, blend: 'dest-in' }])
  .png({ compressionLevel: 9 })
  .toFile(outPath);

console.log(`Wrote ${outPath}`);
