import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ThreeJSCharacter = () => {
  const mountRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const modelRef = useRef(null);
  const animationRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = null; // Transparent background
      
      const camera = new THREE.PerspectiveCamera(
        75,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      });
      
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.setClearColor(0x000000, 0);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      
      mountRef.current.appendChild(renderer.domElement);

      // Enhanced lighting setup with purple theme
      const ambientLight = new THREE.AmbientLight(0x6a5acd, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
      directionalLight.position.set(5, 5, 5);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      scene.add(directionalLight);

      // Purple rim lighting
      const rimLight1 = new THREE.DirectionalLight(0x9370db, 0.8);
      rimLight1.position.set(-5, 3, -5);
      scene.add(rimLight1);

      const rimLight2 = new THREE.DirectionalLight(0x8a2be2, 0.6);
      rimLight2.position.set(3, -2, 5);
      scene.add(rimLight2);

      // Create awesome geometric robot/spaceship
      const robotGroup = new THREE.Group();
      modelRef.current = robotGroup;

      // Advanced Materials
      const purpleMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x6a5acd,
        metalness: 0.9,
        roughness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        envMapIntensity: 1.5
      });

      const silverMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xc0c0c0,
        metalness: 1.0,
        roughness: 0.02,
        clearcoat: 1.0,
        clearcoatRoughness: 0.01,
        envMapIntensity: 2.0
      });

      const whiteMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.1,
        roughness: 0.2,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1
      });

      const glowMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xda70d6,
        emissive: 0x4b0082,
        emissiveIntensity: 1.0,
        metalness: 0.2,
        roughness: 0.05,
        transparent: true,
        opacity: 0.9
      });

      // Main body - sleek octahedron
      const mainBodyGeometry = new THREE.OctahedronGeometry(1.2, 2);
      const mainBody = new THREE.Mesh(mainBodyGeometry, purpleMaterial);
      mainBody.castShadow = true;
      mainBody.receiveShadow = true;
      robotGroup.add(mainBody);

      // Central core with glow
      const coreGeometry = new THREE.SphereGeometry(0.4, 32, 32);
      const core = new THREE.Mesh(coreGeometry, glowMaterial);
      core.position.set(0, 0, 0);
      robotGroup.add(core);

      // Rotating rings around the core
      const ringGeometry1 = new THREE.TorusGeometry(0.8, 0.08, 16, 100);
      const ring1 = new THREE.Mesh(ringGeometry1, silverMaterial);
      ring1.rotation.x = Math.PI / 2;
      robotGroup.add(ring1);

      const ringGeometry2 = new THREE.TorusGeometry(1.0, 0.06, 16, 100);
      const ring2 = new THREE.Mesh(ringGeometry2, whiteMaterial);
      ring2.rotation.z = Math.PI / 2;
      robotGroup.add(ring2);

      const ringGeometry3 = new THREE.TorusGeometry(1.2, 0.04, 16, 100);
      const ring3 = new THREE.Mesh(ringGeometry3, silverMaterial);
      robotGroup.add(ring3);

      // Wing/Fin structures
      const wingGeometry = new THREE.ConeGeometry(0.3, 1.5, 8);
      
      const leftWing = new THREE.Mesh(wingGeometry, purpleMaterial);
      leftWing.position.set(-1.5, 0, 0);
      leftWing.rotation.z = Math.PI / 2;
      leftWing.castShadow = true;
      robotGroup.add(leftWing);

      const rightWing = new THREE.Mesh(wingGeometry, purpleMaterial);
      rightWing.position.set(1.5, 0, 0);
      rightWing.rotation.z = -Math.PI / 2;
      rightWing.castShadow = true;
      robotGroup.add(rightWing);

      const topWing = new THREE.Mesh(wingGeometry, silverMaterial);
      topWing.position.set(0, 1.5, 0);
      topWing.castShadow = true;
      robotGroup.add(topWing);

      const bottomWing = new THREE.Mesh(wingGeometry, silverMaterial);
      bottomWing.position.set(0, -1.5, 0);
      bottomWing.rotation.x = Math.PI;
      bottomWing.castShadow = true;
      robotGroup.add(bottomWing);

      // Glowing orbs at wing tips
      const orbGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      
      const leftOrb = new THREE.Mesh(orbGeometry, glowMaterial);
      leftOrb.position.set(-2.2, 0, 0);
      robotGroup.add(leftOrb);

      const rightOrb = new THREE.Mesh(orbGeometry, glowMaterial);
      rightOrb.position.set(2.2, 0, 0);
      robotGroup.add(rightOrb);

      const topOrb = new THREE.Mesh(orbGeometry, glowMaterial);
      topOrb.position.set(0, 2.2, 0);
      robotGroup.add(topOrb);

      const bottomOrb = new THREE.Mesh(orbGeometry, glowMaterial);
      bottomOrb.position.set(0, -2.2, 0);
      robotGroup.add(bottomOrb);

      // Add some crystalline details
      const crystalGeometry = new THREE.TetrahedronGeometry(0.2, 0);
      
      for (let i = 0; i < 8; i++) {
        const crystal = new THREE.Mesh(crystalGeometry, whiteMaterial);
        const angle = (i / 8) * Math.PI * 2;
        crystal.position.x = Math.cos(angle) * 1.8;
        crystal.position.z = Math.sin(angle) * 1.8;
        crystal.position.y = (Math.random() - 0.5) * 0.5;
        crystal.rotation.x = Math.random() * Math.PI;
        crystal.rotation.y = Math.random() * Math.PI;
        crystal.rotation.z = Math.random() * Math.PI;
        crystal.castShadow = true;
        robotGroup.add(crystal);
      }

      // Add to scene
      scene.add(robotGroup);
      robotGroup.position.set(0, 0, 0);

      // Camera positioning
      camera.position.set(0, 0, 6);
      camera.lookAt(0, 0, 0);

      // Mouse tracking
      const handleMouseMove = (event) => {
        if (!mountRef.current) return;
        
        const rect = mountRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        mousePosition.current = { x, y };
      };

      document.addEventListener('mousemove', handleMouseMove, { passive: true });

      // Animation loop
      const animate = () => {
        animationRef.current = requestAnimationFrame(animate);

        if (modelRef.current) {
          const time = Date.now() * 0.001;
          
          // Smooth cursor following - STRONG rotation
          const targetRotationY = mousePosition.current.x * 1.2; // Increased sensitivity
          const targetRotationX = mousePosition.current.y * 0.8; // Increased sensitivity
          
          modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.1;
          modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.08;

          // Floating animation
          modelRef.current.position.y = Math.sin(time * 1.5) * 0.3;

          // Core pulsing
          core.material.emissiveIntensity = 0.8 + Math.sin(time * 3) * 0.6;
          core.scale.setScalar(1 + Math.sin(time * 2) * 0.1);

          // Ring rotations - different speeds
          ring1.rotation.z = time * 0.8;
          ring2.rotation.x = Math.PI / 2 + time * 0.6;
          ring3.rotation.y = time * 0.4;

          // Orb pulsing
          leftOrb.material.emissiveIntensity = 1.0 + Math.sin(time * 2.5) * 0.8;
          rightOrb.material.emissiveIntensity = 1.0 + Math.sin(time * 2.5 + Math.PI) * 0.8;
          topOrb.material.emissiveIntensity = 1.0 + Math.sin(time * 2.5 + Math.PI/2) * 0.8;
          bottomOrb.material.emissiveIntensity = 1.0 + Math.sin(time * 2.5 + Math.PI*1.5) * 0.8;

          // Wing subtle rotation
          leftWing.rotation.y = Math.sin(time * 0.5) * 0.1;
          rightWing.rotation.y = -Math.sin(time * 0.5) * 0.1;
          topWing.rotation.x = Math.sin(time * 0.7) * 0.1;
          bottomWing.rotation.x = Math.PI - Math.sin(time * 0.7) * 0.1;

          // Continuous slow rotation for base movement
          modelRef.current.rotation.z += 0.002;
        }

        renderer.render(scene, camera);
      };

      // Handle resize
      const handleResize = () => {
        if (!mountRef.current) return;
        
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      // Start animation
      animate();
      setIsLoaded(true);

      // Cleanup
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        
        if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
        
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
        
        renderer.dispose();
      };
    } catch (error) {
      console.error('Three.js Character Error:', error);
      setIsLoaded(false);
    }
  }, []);  return (
    <div className="relative w-full h-full">
      <div
        ref={mountRef}
        className="w-full h-full"
        style={{ 
          cursor: 'crosshair',
          touchAction: 'none',
          minHeight: '600px'
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-gray-900/20 rounded-lg backdrop-blur-sm">
          <div className="text-center">
            <div className="relative mb-6">
              <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-purple-500 mx-auto"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-20 w-20 border border-purple-400 opacity-20"></div>
            </div>
            <p className="text-white/90 text-xl font-medium mb-2">Loading Futuristic Model</p>
            <p className="text-purple-300/70 text-sm">Initializing 3D graphics...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeJSCharacter;
