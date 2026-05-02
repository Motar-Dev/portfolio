import { motion } from 'framer-motion';

const sitemap = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Contact me',
    href: '#contact',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Motar-Dev',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammed-motar-803b6a1b3/',
  },
  {
    label: 'Instagram',
    href: '',
  },
];

import { ButtonPrimary } from './Button';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='lg:grid lg:grid-cols-2'
        >
          <div className='mb-10'>
            <h2 className='headline-1 mb-8 lg:max-w-[12ch]'>
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href='mailto:mohammed.motar10@gmail.com'
              label='Start project'
              icon='chevron_right'
            />
          </div>

          <div className='grid grid-cols-2 gap-4 lg:pl-20'>
            <div>
              <p className='mb-2'>Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='mb-2'>Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      target='_blank'
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
