import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Basic scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      precision: "lowp"
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Simplified geometry and materials
    const sphereGeometry = new THREE.SphereGeometry(1, 16, 16);
    const materials = [
      new THREE.MeshBasicMaterial({
        color: 0x8B5CF6,
        transparent: true,
        opacity: 0.2,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x10B981,
        transparent: true,
        opacity: 0.2,
      }),
    ];

    // Create only 2 spheres instead of 3
    const spheres = Array(2).fill(null).map((_, i) => {
      const sphere = new THREE.Mesh(sphereGeometry, materials[i % 2]);
      sphere.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 10 - 15
      );
      sphere.scale.setScalar(Math.random() * 2 + 1);
      scene.add(sphere);
      return sphere;
    });

    camera.position.z = 15;

    // Simplified animation
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      spheres.forEach((sphere, i) => {
        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.001;
        sphere.position.y += Math.sin(Date.now() * 0.0005 + i) * 0.005;
      });
      renderer.render(scene, camera);
    };

    animate();

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      sphereGeometry.dispose();
      materials.forEach(material => material.dispose());
      
      spheres.forEach(sphere => {
        sphere.geometry.dispose();
        if (sphere.material instanceof THREE.Material) {
          sphere.material.dispose();
        }
      });
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default Background3D;