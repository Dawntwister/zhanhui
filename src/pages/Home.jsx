import React from 'react';
import { ReactComponent as ReactLogo } from '../assets/react-icon.svg';
import { ReactComponent as TailwindLogo } from '../assets/tailwindcss.svg';

function Home() {
  return (
    <div className='mt-[6vh]'>

      {/* Banner */}
      <section className='grid grid-cols-12 w-full text-white bg-slate-500 pt-[30vh] pb-[20vh] px-[10vh]'>

        {/* Welcome section */}
        <div className='col-span-9 px-12 leading-12'>
          <h1 className='text-6xl font-bold mb-4'>Welcome to my tech blog, I'm Zhan Hui :)</h1>
          <p className='text-2xl leading-normal mt-4'>This is the home page</p>
        </div>

        {/* Photo placeholder */}
        <div className='col-span-3 place-items-center'>
          {/* Insert a rectangle placeholder */}
          <div className='w-[30vh] h-[30vh] bg-gray-300'></div>
        </div>
      </section>
    

      {/* About the website */}
      <section className='grid grid-cols-12 w-full text-slate-500 bg-white py-[20vh] px-[10vh]'>

        {/* About section */}
        <div className='col-span-9 px-12 leading-12'>
          <h1 className='text-6xl font-bold mb-4'>How is this webpage being built</h1>
          <p className='text-2xl leading-normal mt-4'>This webpage is built under the React framework with Tailwind CSS as well as GSAP, a JavaScript animation library.</p>
        </div>

        <div className='col-span-3 place-items-center'>
          {/* Insert two svg icons */}
          <ReactLogo className="w-[15vh] h-[10vh] mx-5 my-3" />
          <TailwindLogo className="w-[15vh] h-[10vh] mx-5 my-3" />
        </div>

      </section>

    </div>
  );
}

export default Home;
