import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating spheres
    const spheres: THREE.Mesh[] = [];
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    
    for (let i = 0; i < 5; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? 0x8B5CF6 : 0x10B981,
        transparent: true,
        opacity: 0.3,
        shininess: 100,
      });
      
      const sphere = new THREE.Mesh(sphereGeometry, material);
      sphere.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 10 - 15
      );
      sphere.scale.setScalar(Math.random() * 2 + 1);
      spheres.push(sphere);
      scene.add(sphere);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 15;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      spheres.forEach((sphere, i) => {
        sphere.rotation.x += 0.002;
        sphere.rotation.y += 0.003;
        sphere.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

export default Background3D;