import React from 'react';
import { ButtonOutline, ButtonPrimary } from './Button';
import { motion } from 'framer-motion';
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from '../utils/motion';

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
      <motion.div
        className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <div>
          <motion.div
            variants={slideIn('up', '', 0.2, 1)}
            className='flex items-center gap-3'
          >
            <figure className='img-box w-9 h-9 rounded-lg'>
              <img
                src='/images/profile.jpg'
                width={40}
                height={40}
                alt='Portrait'
                className='img-cover'
              />
            </figure>

            <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
              <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                <span className='absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping'></span>
              </span>
              Available for work
            </div>
          </motion.div>

          <motion.h2
            className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            Building Scalable Modern Websites for the Future
          </motion.h2>

          <div className='flex items-center gap-16 lg:gap-3 max-lg:justify-center'>
            <form action=''>
              <motion.div variants={zoomIn(0.2, 0.6)}>
                <ButtonPrimary
                  href='/files/cv.pdf'
                  label='Download CV'
                  icon='download'
                  target='_blank'
                  download='proposed_file_name'
                />
              </motion.div>
            </form>

            <motion.div variants={zoomIn(0.2, 0.6)}>
              <ButtonOutline
                href='#about'
                label='Scroll down'
                icon='arrow_downward'
              />
            </motion.div>
          </div>
        </div>

        <div className='flex justify-center max-lg:mt-5'>
          <motion.figure
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className='w-full max-w-[480px] lg:ml-auto bg-linear-to-t from-sky-400 via-25% via-sky-40 to-65% rounded-[60px] overflow-hidden'
          >
            <motion.img
              variants={fadeIn('up', 'tween', 0.2, 1)}
              src='images/img.png'
              alt='img'
              className='w-full'
              width={656}
              height={800}
            />
          </motion.figure>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
