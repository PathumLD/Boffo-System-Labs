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
                backgroundImage: `linear-gradient( rgba(50, 88, 255, 0.637), rgba(52, 55, 235, 0.5)), url(${bg8})`,
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
            <div className='container px-4 mx-auto bg-blue-100 rounded-xl sm:px-6 lg:px-12'>
                <div className='container mx-auto bg-blue-100 rounded-xl'>
                    <div className='flex flex-wrap gap-x-10'> 
                        {projectData.map((project) => (
                            <div key={project.id} className="relative mx-auto my-12 ">
                                <div className='p-4 overflow-hidden transition-transform duration-300 shadow-md bg-emerald-50 rounded-xl hover:shadow-lg transform-gpu hover:-translate-y-2 hover:scale-110 w-80 h-96'>
                                    <div className="front">
                                        <img src={project.img} alt={project.name} className="object-cover h-40 rounded-t-lg w-72" />
                                        <h2 className="mt-2 text-4xl font-bold text-center">{project.name}</h2>
                                        <h3 className="mt-2 text-lg font-semibold text-center">{project.about}</h3>
                                        <h3 className="mt-2 text-lg font-semibold opacity-50 ">{project.technologies}</h3>
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 transform opacity-0 back bg-gradient-to-br from-blue-900 to-blue-500 hover:opacity-100 rotate-y-180">
                                        <div className="flex flex-col items-center justify-center w-full h-full p-4">
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


