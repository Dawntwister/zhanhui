import React from 'react';
import { ReactComponent as ReactLogo } from '../assets/React_Icon.svg';
import { ReactComponent as TailwindLogo } from '../assets/tailwindcss.svg';

function Home() {
  return (
    <div className='mt-[6vh]'>

      {/* Banner */}
      <section className='grid grid-cols-12 w-full text-white bg-slate-500 pt-[30vh] pb-[20vh] px-[10vh]'>

        {/* Welcome section */}
        <div className='col-span-9 px-12 leading-18'>
          <h1 className='text-6xl font-bold mb-16'>Welcome to my tech blog, I'm Zhan Hui :)</h1>
          <p className='text-2xl leading-normal mt-8'>I'm currently a Year 3 Information Systems student.</p>
          <p className='text-2xl leading-normal mt-8'>I'm currently working on my React webpage and also learning about Artificial Intelligence & Machine Learning.</p>
          <p className='text-2xl leading-normal mt-8'>The main purpose of this website is to showcase my projects as well as the learning process behind each project.</p>
        </div>

        {/* Photo placeholder */}
        <div className='col-span-3 place-items-center'>
          {/* Insert a rectangle placeholder */}
          <div className='w-[30vh] h-[30vh] bg-gray-300'></div>
        </div>
      </section>
    

      {/* About the website */}
      <section className='grid grid-cols-12 w-full text-slate-500 bg-white pt-[20vh] px-[10vh] pb-[10vh]'>

        {/* About section */}
        <div className='col-span-9 px-12 leading-12'>
          <h1 className='text-6xl font-bold mb-4'>How is this webpage being built</h1>
          <p className='text-2xl leading-normal mt-4'>This webpage is built under the React framework with Tailwind CSS as well as GSAP, a JavaScript animation library.</p>
        </div>

        <div className='col-span-3 flex flex-col items-center justify-start'>
          {/* Insert two svg icons */}
          <ReactLogo className="w-[40vh] h-[15vh]" />
          <TailwindLogo className="w-[40vh] h-[15vh] mt-[10vh]" />
        </div>

      </section>

      {/* Contact me with input form */}
      <section className='grid grid-cols-12 w-full text-slate-500 bg-white pt-[20vh] px-[10vh] pb-[10vh]'>
        <div className='col-span-12 '>
          <h2 className='text-4xl md:text-6xl font-bold mb-8'>Contact Me</h2>
        </div>

        <div className='col-span-5'>
          <form>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-lg md:text-xl text-slate-500 mb-2'>Name</label>
              <input type='text' id='name' className='form-input w-full py-3 px-4 rounded border border-slate-300 focus:outline-none focus:border-indigo-500' />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-lg md:text-xl text-slate-500 mb-2'>Email</label>
              <input type='email' id='email' className='form-input w-full py-3 px-4 rounded border border-slate-300 focus:outline-none focus:border-indigo-500' />
            </div>
            <div className='mb-8'>
              <label htmlFor='message' className='block text-lg md:text-xl text-slate-500 mb-2'>Message</label>
              <textarea id='message' rows='5' className='form-textarea w-full py-3 px-4 rounded border border-slate-300 focus:outline-none focus:border-indigo-500'></textarea>
            </div>
            <button type='submit' className='bg-slate-500 text-white py-3 px-6 rounded hover:bg-cyan-500 hover:text-white* transition duration-300'>Send Message</button>
          </form>
        </div>
      </section>


    </div>
  );
}

export default Home;
