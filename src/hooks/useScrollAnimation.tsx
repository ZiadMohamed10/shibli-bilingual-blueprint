import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Animation wrapper component
interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'animate-fade-in',
  delay = 0,
  className = '',
  style,
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible 
          ? `${animation} opacity-100 translate-y-0` 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{
        ...style,
        animationDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </section>
  );
};