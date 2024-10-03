// import React from 'react'
// import SectionHeading from '../tech/SectionHeading'
// import Project from './Project'
// import ProjectsData from './ProjectsData'
// import GridLayout from '../tech/GridLayout'
// const Projects = () => {
//     return (
//         <div name="Projects" className='pt-10 h-full min-h-screen w-full flex items-center  bg-gradient-to-b bg-gray-900 text-white rounded-2xl'>
//             <div className='section'>

//                 <SectionHeading heading="Projects" secondHeading="Check Out Some of my work" />

//                 <GridLayout style="grid-cols-2 max-w-3xl ml-60 max-w-180 grid-cols-3 mb-24">
//                     {ProjectsData.map((project) => {
//                         return (
//                             <Project key={project.name} project={project} />
//                         )
//                     })}

//                 </GridLayout>
//             </div>
//         </div>
//     )
// }

// export default Projects
import React from 'react'
import SectionHeading from '../tech/SectionHeading'
import Project from './Project'
import ProjectsData from './ProjectsData'
import GridLayout from '../tech/GridLayout'

const Projects = () => {
  return (
    <div name="Projects" className='py-16 w-full min-h-screen flex items-center bg-gradient-to-b bg-gray-900 text-white'>
      <div className='w-full px-4 md:px-8'>
        <SectionHeading heading="Projects" secondHeading="Check Out Some of my work" />
        <GridLayout style="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {ProjectsData.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </GridLayout>
      </div>
    </div>
  )
}

export default Projects;
