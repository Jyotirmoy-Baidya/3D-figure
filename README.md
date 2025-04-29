# 🧍‍♂️ NEOVERSINE 3D Action Figure Web Experience

A stunning 3D scrolling experience using **React Three Fiber**, **GSAP ScrollTrigger**, and **GLTF model animations**.

![preview](./preview.gif)

---

## ✨ Features

- 🌐 Scroll-based 3D animation transitions
- 🧠 GSAP timeline with camera movement
- 🧍‍♂️ GLTF 3D model rendered with lighting and float effects
- 🌇 Realistic environmental lighting (`@react-three/drei`)
- ⚛️ React + React Three Fiber integration
- ⚙️ Perspective Camera with smooth transitions

---

## 🖼 Preview
🌐 [Live Demo](https://your-deploy-link.vercel.app)


## 📦 Installation

```bash
git clone https://github.com/yourusername/neoversine-action-figure.git
cd neoversine-action-figure
npm install
```
## 🚀 Usage
```bash
npm run dev
```
Open http://localhost:3000 in your browser to see the magic.

## 🧩 Folder Structure
```bash
.
├── public/
│   └── 2.glb                 # 3D model
├── src/
│   ├── components/
│   │   ├── ActionFigure.jsx  # Main animation component
│   │   ├── Scene.jsx         # PerspectiveCamera and environment
│   │   ├── TextCanvas.jsx    # Renders floating text
│   │   └── Neo.jsx           # GLTF model component
│   └── App.jsx
├── README.md
└── package.json
```
## 🛠 Key Concepts
### 📸PerspectiveCamera
```jsx
<PerspectiveCamera
  ref={cameraRef}
  fov={45}
  near={0.1}
  far={10000}
  makeDefault
  position={[3.5, 1, 3.7]}
/>
```
- Simulates human eye perspective.
- makeDefault makes it the scene's main camera.

## 🏨Environment
```jsx
<Environment preset="city" />
```
- Adds realistic lighting and shadows.

- preset="city" provides a nice ambient feel.

## Float
```jsx
<Float speed={2} rotationIntensity={1}>
  <Neo />
</Float>
```
- Adds subtle float animation to the model.
- Makes the 3D figure feel alive.

## 📝GSAP ScrollTrigger
```js
gsap.timeline({
  scrollTrigger: {
    trigger: mainRef.current,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => setProgress(self.progress),
  }
})
.to(sceneRef.current, { x: '-25vw', y: '100vh' })
// More transitions...
```
- Links scroll position to animation timeline.

- Updates camera and model transitions smoothly.

## 📦 Dependencies
```json
{
  "@react-three/fiber": "^8.x",
  "@react-three/drei": "^9.x",
  "gsap": "^3.x",
  "three": "^0.153.x",
  "react": "^18.x"
}
```
## 🎨 Visual Impact
- These elements together make your GLB model feel immersive, interactive, and visually dynamic.
-PerspectiveCamera, Environment, and Float make your 3D GLB model more alive, cinematic, and complete.
