# Open Graph Image - Manual Conversion Required

## Current Status
- ✅ SVG template created at `public/og-image.svg`
- ⚠️  PNG conversion needed for OG meta tags

## What to Do
Convert the `og-image.svg` to `og-image.png` (1200x630px) using one of these methods:

### Option 1: Online Tool
1. Visit https://cloudconvert.com/svg-to-png
2. Upload `public/og-image.svg`
3. Set output size to 1200x630px
4. Download as `og-image.png`
5. Place in `public/` directory

### Option 2: Command Line (if ImageMagick installed)
```bash
convert public/og-image.svg -resize 1200x630 public/og-image.png
```

### Option 3: Design Tool
1. Open `og-image.svg` in Figma/Sketch/Adobe XD
2. Export as PNG at 1200x630px
3. Save as `public/og-image.png`

## Verification
After converting, check that:
- File exists at `public/og-image.png`
- Dimensions are exactly 1200x630px
- File size is reasonable (<500KB)
- Image looks good on dark backgrounds

## Note
The OG image path is already configured in `app/layout.tsx`:
```typescript
images: [
  {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Grishmin Karki - Senior Frontend Engineer Portfolio',
  },
],
```
