import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DancingRobot = () => {
  const containerRef = useRef();
  const sceneRef = useRef();
  const rendererRef = useRef();
  const torusRef = useRef();
  const animationIdRef = useRef();
  useEffect(() => {
    console.log('DancingRobot component mounting...');
    if (!containerRef.current) {
      console.log('Container ref not available');
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;
    console.log('Container dimensions:', width, 'x', height);// Scene
    const scene = new THREE.Scene();
    // Remove background for transparency
    sceneRef.current = scene;    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);    camera.position.set(0, 0, 4); // Move closer to see the object better

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      premultipliedAlpha: false
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background
    rendererRef.current = renderer;
    
    container.appendChild(renderer.domElement);
    console.log('Renderer canvas added to container');    // Create Torus Knot
    const geometry = new THREE.TorusKnotGeometry(1.0, 0.35, 100, 16); // Increased size
    const material = new THREE.MeshPhongMaterial({ 
      color: 0xc0c0c0, // Silver color
      shininess: 100,
      specular: 0xffffff
    });
    const torus = new THREE.Mesh(geometry, material);
    torusRef.current = torus;
    scene.add(torus);    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    container.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (torusRef.current) {
        // Auto rotation
        torusRef.current.rotation.x += 0.01;
        torusRef.current.rotation.y += 0.01;

        // Follow mouse
        torusRef.current.rotation.z = mouseX * 0.5;
        torusRef.current.position.x = mouseX * 0.5;
        torusRef.current.position.y = mouseY * 0.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const newWidth = container.clientWidth || 800;
      const newHeight = container.clientHeight || 600;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      container.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        minHeight: '400px',
        background: 'transparent',
        overflow: 'hidden',
        position: 'relative'
      }}
    />
  );
};

export default DancingRobot;