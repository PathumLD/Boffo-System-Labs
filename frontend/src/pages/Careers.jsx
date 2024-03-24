// src/pages/Careers.js
import React from 'react';
import bg8 from '../assets/bg8.png';


const Careers = () => {
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
                <h1 className="my-8 font-bold text-white text-7xl">Careers</h1>
            </div>
        </div>
        </div>

        <div className='container p-4 px-6 mx-auto mt-10 rounded-xl bg-emerald-100'>
            <div className='mx-5 my-2 '>
                {/* {companyData.map((company) => (
                    <div key={company.id} className="my-8">
                        <h2 className="text-4xl font-bold text-center underline ">{company.name}</h2>
                        <p className="mt-10 text-lg">{company.description}</p>
                    </div>
                ))} */}
            </div>
        </div>
    </div>
  );
};

export default Careers;