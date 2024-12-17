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

  // Memoize animation function
  const animate = useCallback(() => {
    if (!scene.current || !camera.current || !renderer.current) return;

    spheres.current.forEach((sphere, i) => {
      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.003;
      sphere.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
    });

    renderer.current.render(scene.current, camera.current);
    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  // Memoize resize handler
  const handleResize = useCallback(() => {
    if (!camera.current || !renderer.current || !mountRef.current) return;

    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(window.innerWidth, window.innerHeight);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer.current = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.current.domElement);

    // Create spheres
    for (let i = 0; i < 5; i++) {
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

    // Optimized lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    
    scene.current.add(ambientLight);
    scene.current.add(directionalLight);

    camera.current.position.z = 15;

    // Start animation
    animate();

    // Add resize listener with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);

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