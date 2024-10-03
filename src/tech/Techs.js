import React from 'react';
import GridLayout from './GridLayout';
import SectionHeading from './SectionHeading';
import techo from "./techo";
import Tech from './Tech';

const Techs = () => {
  return (
    <div name="Skills" className='py-16 min-h-screen w-full flex items-center bg-gradient-to-b'>
      <div className="w-full px-4 md:px-8">
        <SectionHeading 
          heading="Skills" 
          secondHeading="These are the Technologies I've worked with" 
        />
        <div className="py-8 rounded-lg bg-transparent">
          <GridLayout style="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {techo.map((skill, index) => (
              <Tech key={index} skill={skill} />
            ))}
          </GridLayout>
        </div>
      </div>
    </div>
  );
};

export default Techs;