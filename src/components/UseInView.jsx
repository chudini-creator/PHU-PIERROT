import { useState, useEffect, useRef } from 'react';

/**
 * Prosty hook do śledzenia, czy element jest w viewporcie.
 * @param {object} options - Opcje dla IntersectionObserver (np. threshold)
 * @returns {[React.RefObject, boolean]} Ref do przypięcia i stan widoczności
 */
export const useInView = (options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const threshold = options.threshold ?? 0.1;
  const root = options.root ?? null;
  const rootMargin = options.rootMargin ?? '0px';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Aktualizuj stan tylko przy wejściu w obszar
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold, root, rootMargin });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin]);

  return [ref, isVisible];
};
