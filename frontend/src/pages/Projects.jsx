// src/pages/Projects.js
import React from 'react';
import bg8 from '../assets/bg8.png';
import bg3 from '../assets/bg3.jpg';
import { projectData } from '../data/projectData.js';

const Projects = () => {
  return (
    <div className=''>
        <div className="bg-gray-100 "
            style={{
                backgroundImage: `linear-gradient(rgba(1, 141, 80, 0.5), rgba(0, 161, 113, 0.637)), url(${bg8})`,
                height: '15rem',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
        <div className="container px-6 mx-auto">
            <div className="flex items-center justify-center">
                <h1 className="my-8 font-bold text-white text-7xl">Projects</h1>
            </div>
        </div>
        </div>

        <div className='mt-10 '>
            <div className='container px-4 mx-auto rounded-xl bg-emerald-100 sm:px-6 lg:px-12'>
                <div className='container mx-auto rounded-xl bg-emerald-100'>
                    <div className='flex flex-wrap gap-x-10'> 
                        {projectData.map((project) => (
                            <div key={project.id} className="mx-auto my-12 relative ">
                                <div className='p-4 overflow-hidden bg-emerald-50 shadow-md rounded-xl hover:shadow-lg transition-transform transform-gpu duration-300 hover:-translate-y-2 hover:scale-110 w-80 h-96'>
                                    <div className="front">
                                        <img src={project.img} alt={project.name} className="object-cover rounded-t-lg h-40 w-72" />
                                        <h2 className="text-4xl font-bold mt-2 text-center">{project.name}</h2>
                                        <h3 className="mt-2 text-lg font-semibold text-center">{project.about}</h3>
                                        <h3 className="mt-2 text-lg font-semibold opacity-50 ">{project.technologies}</h3>
                                    </div>
                                    <div className="back absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900 to-emerald-500 opacity-0 hover:opacity-100 transition-opacity duration-300 transform rotate-y-180">
                                        <div className="w-full h-full p-4 flex flex-col justify-center items-center">
                                            <p className="text-base text-justify text-white">{project.description}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </div>
   

  );
};

export default Projects;


