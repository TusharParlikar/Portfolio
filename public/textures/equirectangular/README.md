# HDR Texture Setup

This folder should contain HDR texture files for the UltraHDR loader.

## Required Files:
- `spruit_sunrise_2k.hdr.jpg` - 2K resolution HDR image
- `spruit_sunrise_4k.hdr.jpg` - 4K resolution HDR image

## Where to Get HDR Textures:
1. **HDR Haven** (https://hdrihaven.com/) - Free HDR images
2. **Poly Haven** (https://polyhaven.com/hdris) - Free HDR images
3. **HDR Labs** (http://www.hdrlabs.com/) - Free and paid HDR images

## How to Use:
1. Download any equirectangular HDR image (.hdr or .exr format)
2. Convert to UltraHDR format using the [Gainmap Creator](https://gainmap-creator.mono-grid.com/)
3. Save as `spruit_sunrise_2k.hdr.jpg` and `spruit_sunrise_4k.hdr.jpg`
4. Place them in this folder

## Fallback:
If no HDR files are found, the component will automatically create a beautiful gradient background as a fallback.

## Supported Formats:
- .hdr.jpg (UltraHDR with gain map)
- Standard HDR files can be converted using the online tool mentioned above
