# Version Screenshots Directory

This directory stores screenshots for portfolio version history feature.

## Required Screenshots

### V1.0 Screenshots
- `v1.0-full.png` - Full homepage screenshot (recommended: 1920px wide)
- `v1.0-thumb.png` - Thumbnail (400x300px, 4:3 ratio)

### V2.0 Screenshots
- `v2.0-full.png` - Full homepage screenshot (recommended: 1920px wide)
- `v2.0-thumb.png` - Thumbnail (400x300px, 4:3 ratio)

## Screenshot Guidelines

1. **Full Screenshots**: Capture entire page from top to bottom at 1920px width
2. **Thumbnails**: Crop or resize to 400x300px for version timeline display
3. **Format**: PNG format with optimization for web
4. **Quality**: High quality, clear and readable text
5. **Consistency**: Same browser and viewport settings for all versions

## How to Capture

### Using Browser DevTools
1. Open portfolio in Chrome/Edge
2. Press F12 to open DevTools
3. Click device toolbar (Ctrl+Shift+M)
4. Set viewport to 1920x1080
5. Use "Capture full size screenshot" from DevTools menu

### Using Screenshot Tools
- **Windows**: Snipping Tool, ShareX
- **Mac**: Command+Shift+4
- **Linux**: Flameshot, GNOME Screenshot

## After Adding Screenshots

Update the screenshot paths in `client/src/data/versions.js`:

```javascript
screenshot: '/assets/version-screenshots/v1.0-thumb.png'
screenshot: '/assets/version-screenshots/v2.0-thumb.png'
```

## Notes

- Screenshots are displayed in VersionPreview modal and VersionTimeline
- Missing screenshots will fall back to placeholder image
- Screenshots should be optimized for web (compressed PNG or WebP)
