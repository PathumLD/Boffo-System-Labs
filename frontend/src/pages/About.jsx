// src/pages/About.js
import React from 'react';
import bg8 from '../assets/bg8.png';
import  {companyData}  from '../data/companyData.js';

const About = () => {
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
                <h1 className="my-8 font-bold text-white text-7xl">About</h1>
            </div>
        </div>
        </div>

        <div className='container p-4 px-6 mx-auto mt-10 rounded-xl bg-emerald-100'>
            <div className='mx-10 my-2 '>
                {companyData.map((company) => (
                    <div key={company.id} className="my-8">
                        <h2 className="text-4xl font-bold text-center underline ">{company.name}</h2>
                        <p className="mt-10 text-lg">{company.description}</p>
                    </div>
                ))}
                {companyData.map((vision) => (
                    <div key={vision.id} className="my-8">
                        <h2 className="ml-20 text-2xl font-bold">{vision.visionTitle}</h2>
                        <p className="mt-2 text-lg">{vision.visionDescription}</p>
                    </div>
                ))}
                {companyData.map((mission) => (
                    <div key={mission.id} className="my-8">
                        <h2 className="ml-20 text-2xl font-bold">{mission.missionTitle}</h2>
                        <p className="mt-2 text-lg">{mission.missionDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default About;