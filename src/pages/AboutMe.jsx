import React from 'react'

function AboutMe() {
  return (
    <div className='bg-white'>

      {/* Banner */}
      <section className='w-full text-white bg-slate-500 pt-[30vh] pb-[20vh] px-[10vh]'>

        {/* About Me section */}
        <div className='px-12 leading-18'>
          <h1 className='text-6xl font-bold mb-16'>About Me</h1>
          <p className='text-2xl leading-normal mt-8'>I am passionate towards machine learning 
          and would be heading on to understand Natural Language Processing (NLP) after structuring my website. 
          I first started liking Machine Learning when I started interacting with Pandas and Sckit-Learn 
          in Year 3 Semester 1 in SMU during a machine learning module. 
          The rise of ChatGPT has also made me much more curious about the algorithm and the works behind the model.
          </p>
          <p className='text-2xl leading-normal mt-8'>Aside from programming, I am an avid F1 fan 
          and would regularly watch F1 on weekends. I would regularly travel to Johor Bahru, Malaysia 
          on a monthly basis for thrift shopping and window shopping experience. 
          I would also go on food hunting as well whenever I can make time.</p>
        </div>
      </section>

      <section className='w-full text-slate-500 pt-[10vh] px-[10vh] pb-[10vh]'>
        <div className='px-12 leading-18'>
          <h3 className='text-2xl font-bold mb-16'>Educational Background:</h3>
        </div>


        {/* Div to wrap both cards and to make sure the cards have same height */}
        <div class="grid grid-cols-12">
          {/*Card to display Years of education in institutions*/}
          <div class="col-span-2 px-12 pr-3">
            <div class="p-4 bg-slate-500 text-white rounded-md overflow-hidden shadow-lg h-full">
              <div class="font-bold text-l mb-2">2021 - Present</div>
            </div>
          </div>

          {/*Card to display Education Institution and Courses taken*/}
          <div class="col-span-10 px-12">
            <div class="p-4 bg-slate-500 text-white rounded-md overflow-hidden shadow-lg h-full">
              <div class="font-bold text-l mb-2">Singapore Management University</div>
              <div className='text-l leading-normal my-8 p-4'>
                <ul className="list-disc">
                  <li>IS111: Introduction to Programming (Python)</li>
                  <li>IS112: Data Management (SQL)</li>
                  <li>IS113 & IS216: Web Application Development (HTML, CSS, PHP & JavaScript)</li>
                </ul>
              </div>
              {/* Div to have rounded rectangles to display the coding languages */}
              <div className='grid grid-cols-5 gap-4 text-center'>
                <div className='bg-white text-slate-500 rounded-md px-4 py-2'>Python</div>
                <div className='bg-white text-slate-500 rounded-md px-4 py-2'>SQL</div>
                <div className='bg-white text-slate-500 rounded-md px-4 py-2'>HTML</div>
                <div className='bg-white text-slate-500 rounded-md px-4 py-2'>CSS</div>
                <div className='bg-white text-slate-500 rounded-md px-4 py-2'>PHP</div>
                <div className='bg-white text-slate-500 rounded-md px-4 py-2'>JavaScript</div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe