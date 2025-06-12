import React, { useEffect, useRef } from 'react';

interface InfiniteLoadingTriggerProps {
  onTrigger: () => void;
};

export const InfiniteLoadingTrigger = ({
  onTrigger,
}: InfiniteLoadingTriggerProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggerElement = divRef.current;
    if (!triggerElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onTrigger();
        }
      }, {
        root: null,
        threshold: 0.1,
      });
    });

    observer.observe(triggerElement);
    return () => observer.unobserve(triggerElement);
  }, [onTrigger]);

  return <div ref={divRef} />;
};
