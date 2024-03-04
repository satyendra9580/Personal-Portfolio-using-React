import React from 'react'
import GridLayout from './GridLayout'
import SectionHeading from './SectionHeading'
import techo from "./techo";
import Tech from './Tech';

const Techs = () => {
    return (
        <div name="Skills" className='pt-4 h-full min-h-screen w-full flex items-center bg-gradient-to-b '>
            <div className="section">            
                <SectionHeading heading="Skills" secondHeading="These are the Technologies I've worked with" />
                <div className="py-8 xs:p-8 p-28 ml-32 rounded-lg bg-transparent">
                    <GridLayout style="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                        {techo.map((skill, index) => {
                            return (
                                <Tech key={index} skill={skill} />
                            )
                        })}
                    </GridLayout>
                    
                </div>
            </div>
        </div>
    )
}

export default Techs;