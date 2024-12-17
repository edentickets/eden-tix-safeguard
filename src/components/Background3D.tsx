import { useEffect, useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const scene = useRef<THREE.Scene>();
  const camera = useRef<THREE.PerspectiveCamera>();
  const renderer = useRef<THREE.WebGLRenderer>();
  const spheres = useRef<THREE.Mesh[]>([]);

  // Memoize geometry and materials
  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(1, 16, 16), []); // Reduced geometry complexity
  const materials = useMemo(
    () => [
      new THREE.MeshBasicMaterial({ // Changed to BasicMaterial for better performance
        color: 0x8B5CF6,
        transparent: true,
        opacity: 0.2,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x10B981,
        transparent: true,
        opacity: 0.2,
      }),
    ],
    []
  );

  // Memoize animation function
  const animate = useCallback(() => {
    if (!scene.current || !camera.current || !renderer.current) return;

    // Reduced animation complexity
    spheres.current.forEach((sphere, i) => {
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;
      sphere.position.y += Math.sin(Date.now() * 0.0005 + i) * 0.005;
    });

    renderer.current.render(scene.current, camera.current);
    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  // Memoize resize handler with debouncing
  const handleResize = useCallback(() => {
    if (!camera.current || !renderer.current || !mountRef.current) return;

    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(window.innerWidth, window.innerHeight);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with optimized settings
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer.current = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: false, // Disabled antialiasing for better performance
      powerPreference: "high-performance",
      precision: "lowp" // Use low precision for better performance
    });
    
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.current.domElement);

    // Create fewer spheres
    for (let i = 0; i < 3; i++) {
      const material = materials[i % 2];
      const sphere = new THREE.Mesh(sphereGeometry, material);
      
      sphere.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 10 - 15
      );
      sphere.scale.setScalar(Math.random() * 2 + 1);
      spheres.current.push(sphere);
      scene.current.add(sphere);
    }

    // Simplified lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.current.add(ambientLight);

    camera.current.position.z = 15;

    // Start animation
    animate();

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250); // Increased debounce time
    };

    window.addEventListener('resize', debouncedResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      if (renderer.current && mountRef.current) {
        mountRef.current.removeChild(renderer.current.domElement);
        renderer.current.dispose();
      }

      sphereGeometry.dispose();
      materials.forEach(material => material.dispose());
      
      spheres.current.forEach(sphere => {
        sphere.geometry.dispose();
        if (sphere.material instanceof THREE.Material) {
          sphere.material.dispose();
        }
      });
    };
  }, [animate, handleResize, materials, sphereGeometry]);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default Background3D;