# Stormtrooper 3D Model Setup

To get the dancing Stormtrooper model working:

## Option 1: Download from Sketchfab (Recommended)
1. Visit: https://sketchfab.com/3d-models/dancing-stormtrooper-b55f49d1fc1f4da3b7cb05e2afdf78a8
2. Download the model (you may need to create a free account)
3. Extract the downloaded files
4. Look for the `.dae` file (COLLADA format)
5. Rename it to `stormtrooper.dae` and place it in this folder

## Option 2: Alternative Free Models
If the above doesn't work, you can use any COLLADA (.dae) file with animations:
- Search for "dancing robot collada" or "animated character dae"
- Ensure the model has animations included
- Place the `.dae` file in this folder and rename it to `stormtrooper.dae`

## Option 3: Fallback Robot
If no model is found, the component will automatically create a simple geometric robot that dances and follows your cursor.

## File Structure
```
stormtrooper/
├── stormtrooper.dae (main model file)
├── textures/ (if any texture files)
└── README.md (this file)
```

The component is already set up to handle loading errors gracefully with a fallback animated robot.
