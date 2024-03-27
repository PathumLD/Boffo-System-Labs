import React from 'react';
import Footer from '../components/common/Footer';
import bg1 from '../assets/bg1.png';

const Home = () => {
  return (
    <div className="w-full bg-white">
      <div
        className="w-full bg-center bg-no-repeat bg-cover "
        style={{
          backgroundImage: `linear-gradient( rgba(50, 88, 255, 0.637), rgba(52, 55, 235, 0.5)), url(${bg1})`,
          height: '82vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="mx-auto">
          <h1 className="text-5xl font-bold text-white">
            Welcome to Boffo System Labs
          </h1>
        </div>
      </div>
      <div className="h-screen mt-20 bg-white"> {/* Added padding-bottom */}
        <div className="container px-6 mx-auto">
          <div className="flex items-center justify-center">
            <h1 className="my-8 text-5xl font-bold text-gray-800">Home</h1>
          </div>
        </div>
      </div>
      <div className="h-screen bg-emerald-900/10"> {/* Added padding-bottom */}
        <div className="container px-6 mx-auto">
          <div className="flex items-center justify-center">
            <h1 className="my-8 text-5xl font-bold text-gray-800">Home</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;