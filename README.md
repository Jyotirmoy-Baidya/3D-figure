🧊 ActionFigure 3D Experience
This project creates a fully immersive 3D scrolling experience using React Three Fiber, GSAP ScrollTrigger, and 3D models in .glb format. The camera smoothly transitions through multiple positions based on scroll progress, animating a floating 3D action figure with realistic lighting and a parallax feel.

🚀 Features
🎥 Perspective Camera transitions driven by scroll

🌆 Environment lighting using @react-three/drei

🎈 Floating animation for 3D model using <Float />

🌀 Scroll-based animation and transitions powered by GSAP

🧩 Modular React components with full async suspense loading

📦 Tech Stack
React.js

@react-three/fiber – React renderer for three.js

@react-three/drei – Useful helpers (camera, environment, float, etc.)

GSAP – Animation engine

GSAP ScrollTrigger – Sync animations to scroll

GLTF Models – 3D asset format

📁 Folder Structure
bash
Copy
Edit
src/
├── components/
│   ├── ActionFigure.jsx       # Main layout and scroll logic
│   ├── Scene.jsx              # R3F scene setup with lighting, camera, float
│   ├── Neo.jsx                # Loads the .glb model using useGLTF
│   └── TextCanvas.jsx         # Renders 3D text
🛠️ Setup Instructions
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/3d-action-figure.git
cd 3d-action-figure
Install dependencies:

bash
Copy
Edit
npm install
Run the dev server:

bash
Copy
Edit
npm run dev
Ensure your assets are in public/:

Place your .glb model at public/2.glb

Preload any other models if needed

🔍 Key Concepts
🎥 PerspectiveCamera
A realistic camera setup mimicking human vision.

jsx
Copy
Edit
<PerspectiveCamera ref={cameraRef} makeDefault position={[3.5, 1, 3.7]} />
🌆 Environment
Adds global lighting and reflections.

jsx
Copy
Edit
<Environment preset="city" />
🎈 Float
Applies a soft floating and rotating animation to your model.

jsx
Copy
Edit
<Float speed={2} rotationIntensity={1}>
  <Neo />
</Float>
🔄 Scroll-based Camera Transitions
Handled with gsap.timeline() and updated in useEffect based on progress.

🧠 Tips
For better performance, use lazy loading and <Suspense fallback={...}>

GLTF models should be optimized before use (e.g. using Blender or gltfpack)

Always dispose of GLTF scenes to free up GPU memory

Use <axesHelper /> or <gridHelper /> for debugging 3D layouts

📌 To Do
Add mobile responsiveness

Integrate sound/ambient audio

Add directional/point lighting with shadow support

Animate model parts via animationMixer if supported