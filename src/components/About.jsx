import React from 'react';

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
          <p className='text-zinc-300 text-xl md:max-w-[60ch] mb-4 md:mb-8'>
            Welcome! I'm Mohammed, a Software developer, lifelong learner,
            experienced in HTML, CSS/SCSS, Javascript, PHP, MongoDB and Drupal.
            I work across the Full Stack, building robust applications and
            delivering clean, efficient solutions end-to-end. I am excited by
            potential of software to make a positive difference in people's
            lives and across the world.
          </p>

          <div className='flex flex-wrap items-center'>
            <div>
              <div className='flex items-center md:mb-2'>
                <span className='text-2xl font-semibold md:text-4xl'>4</span>
                <span className='text-sky-400 font-semibold md:text-3xl'>
                  +
                </span>
              </div>

              <p className='text-sm text-zinc-400'>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
