import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const socialLinks = [
  {
    Icon: FaGithub,
    link: 'https://github.com/Motar-Dev',
  },
  {
    Icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/mohammed-motar-803b6a1b3/',
  },
  {
    Icon: FaInstagram,
    link: '',
  },
];

const Contact = () => {
  return (
    <section className='section' id='contact'>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='container lg:grid lg:grid-cols-2 lg:items-stretch'
      >
        <div className='mb-12 lg:mb-0 lg:flex lg:flex-col'>
          <h2 className='headline-2 lg:max-w-[12ch]'>
            Contact me for collaboration
          </h2>

          <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]'>
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>

          <div className='flex items-center gap-2 mt-auto'>
            {socialLinks.map(({ Icon, link }, key) => (
              <a
                href={link}
                target='_blank'
                className='w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80'
              >
                <Icon size={32} />
              </a>
            ))}
          </div>
        </div>

        <form
          action='https://forminit.com/f/t4ac7xyc3n2'
          method='POST'
          className='xl:pl-10 2xl:pl-20'
        >
          <div className='md:grid md:items-center md:grid-cols-2 md:gap-2'>
            <div className='mb-4'>
              <label htmlFor='name' className='label'>
                Name
              </label>
              <input
                type='text'
                name='fi-sender-fullName'
                id='name'
                autoComplete='name'
                required
                placeholder='Enter Your Name'
                className='text-field'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='label'>
                Name
              </label>
              <input
                type='email'
                name='fi-sender-email'
                id='email'
                autoComplete='email'
                required
                placeholder='example@example.com'
                className='text-field'
              />
            </div>
          </div>

          <div className='mb-4'>
            <label htmlFor='message' className='label'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              required
              placeholder='Enter your message!'
              className='text-field resize-y min-h-32 max-h-80'
            ></textarea>
          </div>

          <div className='flex'>
            <button type='submit' className='btn btn-primary btn-width'>
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
