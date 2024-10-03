
import React from 'react';

const SectionHeading = ({ heading, secondHeading }) => {
  return (
    <div className="pb-6 text-white text-center">
      <h2 className='text-center md:text-left text-2xl md:text-3xl lg:text-4xl px-1 inline border-b-4 border-gray-400 font-bold'>
        {heading}
      </h2>
      {secondHeading && <p className='text-center md:text-left py-4 text-sm md:text-base lg:text-lg ml-5 font-bold'>
        {secondHeading}
      </p>}
    </div>
  );
};

export default SectionHeading;
