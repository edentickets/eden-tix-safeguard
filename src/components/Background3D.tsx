import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  // Memoize geometry and materials
  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(1, 32, 32), []);
  const materials = useMemo(
    () => [
      new THREE.MeshPhongMaterial({
        color: 0x8B5CF6,
        transparent: true,
        opacity: 0.3,
        shininess: 100,
      }),
      new THREE.MeshPhongMaterial({
        color: 0x10B981,
        transparent: true,
        opacity: 0.3,
        shininess: 100,
      }),
    ],
    []
  );

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating spheres
    const spheres: THREE.Mesh[] = [];
    
    for (let i = 0; i < 5; i++) {
      const material = materials[i % 2];
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

    // Optimized lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 15;

    let animationFrameId: number;

    // Optimized animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      spheres.forEach((sphere, i) => {
        sphere.rotation.x += 0.002;
        sphere.rotation.y += 0.003;
        sphere.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Optimized resize handler with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      sphereGeometry.dispose();
      materials.forEach(material => material.dispose());
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [sphereGeometry, materials]);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default Background3D;