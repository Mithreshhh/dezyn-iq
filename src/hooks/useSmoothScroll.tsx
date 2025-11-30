import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis with ultra-smooth settings
    const lenis = new Lenis({
      duration: 1.2, // Duration of scroll animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function for very smooth scroll
      orientation: 'vertical', // Vertical scrolling
      gestureOrientation: 'vertical',
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
      wheelMultiplier: 1, // Multiplier for wheel scroll speed
      touchMultiplier: 2, // Multiplier for touch scroll speed
      infinite: false, // Disable infinite scroll
    });

    // Animation loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);
};
