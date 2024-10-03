
import React from 'react';

const GridLayout = ({ children, style }) => {
  return (
    <div className={`grid ${style} gap-4 sm:gap-6 md:gap-8`}>
      {children}
    </div>
  );
};
export default GridLayout;