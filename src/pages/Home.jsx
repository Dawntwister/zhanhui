import React from 'react';

function Home() {
  return (
    <div className='flex justify-evenly items-center w-full mt-[6vh]'>


      {/* Banner */}
      <div className='grid grid-cols-12 w-full justify-items-center bg-slate-500 text-white pt-[30vh] pb-[20vh]'>

        {/* Welcome section */}
        <div className='col-span-9 flex flex-col justify-center px-12 leading-loose'>
          <h1 className='text-6xl font-bold'>Welcome to my tech blog, I'm Zhan Hui :)</h1>
          <p className='text-2xl'>This is the home page</p>
        </div>

        {/* Photo placeholder */}
        <div className='col-span-3 bg-gray-300 w-36 h-48'>
          {/* Photo */}
        </div>

      </div>



      {/* About the website */}
      {/* <div className='grid grid-cols-12 w-full justify-items-center text-slate-500 py-[20vh]'> */}

        {/* About section */}
        {/* <div className='flex justify-center px-12 leading-loose'>
          <h1 className='text-6xl font-bold'>About this website</h1>
          <p className='text-2xl'>This is the home page</p>
        </div>
  
      </div> */}


    </div>
  );
}

export default Home;
