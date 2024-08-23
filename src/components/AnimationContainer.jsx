import { useEffect, useRef, useState } from "react";
import "../styles/AnimationContainer.css";

const AnimationContainer = ({ children, mustReanimate = false }) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && (!hasIntersected || mustReanimate)) {
      setHasIntersected(true);
    } else if (!isIntersecting && mustReanimate) {
      setHasIntersected(false);
    }
  }, [isIntersecting, mustReanimate]);

  const animationClass = hasIntersected
    ? "endFadeInEffect"
    : "startFadeInEffect";

  return (
    <div ref={ref} className={`${animationClass} text-center`}>
      {children}
    </div>
  );
};

export default AnimationContainer;
