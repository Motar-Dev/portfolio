import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const SkillCard = ({ icons, iconType, label, desc, classes }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.3, 1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={
        'flex flex-col items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group text-center ' +
        classes
      }
    >
      <div
        className={`flex text-center justify-between ${icons.length > 1 && 'w-[120px]'} ${icons.length > 2 && 'w-[190px]'}`}
      >
        {icons.map(({ Icon, color }, key) => {
          {
            if (iconType === 'svg') {
              return (
                <figure className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>
                  <img
                    src={Icon}
                    alt={label}
                    width={32}
                    height={32}
                    key={key}
                  />
                </figure>
              );
            } else {
              return (
                <figure className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>
                  <Icon size={32} color={color} key={key} />
                </figure>
              );
            }
          }
        })}
      </div>

      <div>
        <h3>{label}</h3>
        <p className='text-zinc-400 text-sm'>{desc}</p>
      </div>
    </motion.div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
