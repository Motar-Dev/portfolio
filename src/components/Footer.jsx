import React from 'react';

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
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Reviews',
    href: '#reviews',
  },
  {
    label: 'Contact me',
    href: '#contact',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/codewithsadee-org',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithsadee',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codewithsadee',
  },
];

import { ButtonPrimary } from './Button';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-2'>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
