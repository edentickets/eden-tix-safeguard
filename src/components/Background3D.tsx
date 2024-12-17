import { useEffect, useRef, memo } from 'react';
import * as THREE from 'three';

const Background3D = memo(() => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const spheresRef = useRef<THREE.Mesh[]>([]);
  const frameIdRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with performance optimizations
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      precision: "lowp"
    });

    const renderer = rendererRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Optimized geometry and materials
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

    // Create spheres
    spheresRef.current = Array(2).fill(null).map((_, i) => {
      const sphere = new THREE.Mesh(sphereGeometry, materials[i % 2]);
      sphere.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 10 - 15
      );
      sphere.scale.setScalar(Math.random() * 2 + 1);
      sceneRef.current?.add(sphere);
      return sphere;
    });

    cameraRef.current.position.z = 15;

    // Optimized animation loop
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
      frameIdRef.current = requestAnimationFrame(animate);
      
      spheresRef.current.forEach((sphere, i) => {
        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.001;
        sphere.position.y += Math.sin(Date.now() * 0.0005 + i) * 0.005;
      });
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!cameraRef.current || !rendererRef.current) return;
        
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (mountRef.current && rendererRef.current?.domElement) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose of Three.js resources
      sphereGeometry.dispose();
      materials.forEach(material => material.dispose());
      
      spheresRef.current.forEach(sphere => {
        sphere.geometry.dispose();
        if (sphere.material instanceof THREE.Material) {
          sphere.material.dispose();
        }
      });

      rendererRef.current?.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
});

Background3D.displayName = "Background3D";

export default Background3D;