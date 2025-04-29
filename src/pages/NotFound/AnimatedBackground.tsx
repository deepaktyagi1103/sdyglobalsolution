import React, { forwardRef } from 'react';

interface AnimatedBackgroundProps {
  ref: React.Ref<HTMLDivElement>;
}

const AnimatedBackground = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise-pattern opacity-10"></div>
    </div>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;