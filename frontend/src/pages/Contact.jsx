// src/pages/Contact.js
import React from 'react';
import bg8 from '../assets/bg8.png';

const Contact = () => {
    const iframeHtml = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0518700998955!2d79.88504861088408!3d6.884390393085857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ba0b65ceee1%3A0x219d43219df170f1!2sBoffo%20System%20Labs%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1711094212930!5m2!1sen!2slk" width="1450" height="300" style="border:4px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
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
                <h1 className="my-8 font-bold text-white text-7xl">Contact</h1>
            </div>
        </div>
        </div>

        

        <div className='container p-4  mx-auto mt-10 rounded-xl bg-emerald-100'>

        <div className=' grid grid-cols-2 px-4 border-b pb-10 border-emerald-600'>
            <div>
                <h1 className='text-3xl font-bold'>Basic Details</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>Our Location</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>Our Services</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>Contact Us</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
            </div>
        </div>

            <div className='mx-5 my-5 '>
                <div className="container mx-auto">
                    <div className="flex items-center justify-center">
                        <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />  
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;