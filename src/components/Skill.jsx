import { FaDrupal } from 'react-icons/fa6';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import {
  FaSass,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaLaravel,
  FaDocker,
  FaBootstrap,
} from 'react-icons/fa';
import { RiPhpFill } from 'react-icons/ri';
import { DiSymfony } from 'react-icons/di';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi';

import SkillCard from './SkillCard';

const skillItem = [
  {
    icons: [
      { Icon: BiLogoJavascript, color: '#F0DB4F' },
      { Icon: BiLogoTypescript, color: '#007acc' },
    ],
    iconType: 'icon',
    label: 'JavaScript / TypeScript',
    desc: 'Frontend',
  },
  {
    icons: [
      { Icon: FaReact, color: '#61DBFB' },
      { Icon: FaVuejs, color: '#41B883' },
    ],
    iconType: 'icon',
    label: 'React / Vue.Js',
    desc: 'JS Frameworks',
  },
  {
    icons: [
      { Icon: FaSass, color: '#c69' },
      { Icon: SiTailwindcss, color: '#3B82F6' },
      { Icon: FaBootstrap, color: '#68A063' },
    ],
    iconType: 'icon',
    label: 'SCSS / TailwindCSS / Bootstrap',
    desc: 'User Interfaces',
  },
  {
    icons: [{ Icon: '/images/figma.svg' }],
    iconType: 'svg',
    label: 'Figma',
    desc: 'Design tool',
  },
  {
    icons: [
      { Icon: RiPhpFill, color: '#FFFFFF' },
      { Icon: DiSymfony, color: '#FFFFFF' },
    ],
    iconType: 'icon',
    label: 'PHP / Symfony',
    desc: 'Backend',
  },
  {
    icons: [{ Icon: FaLaravel, color: '#F05340' }],
    iconType: 'icon',
    label: 'Laravel',
    desc: 'BackEnd Framework',
  },
  {
    icons: [{ Icon: FaDrupal, color: '#007CBC' }],
    iconType: 'icon',
    label: 'Drupal',
    desc: 'CMS',
  },
  {
    icons: [{ Icon: FaNodeJs, color: '#68A063' }],
    iconType: 'icon',
    label: 'NodeJS',
    desc: 'Web Server',
  },
  {
    icons: [{ Icon: SiMongodb, color: '#3FA037' }],
    iconType: 'icon',
    label: 'MongoDB',
    desc: 'Database',
  },
  {
    icons: [{ Icon: FaDocker, color: '#0db7ed' }],
    iconType: 'icon',
    label: 'Docker',
    desc: 'Operating system for containers',
  },
  {
    icons: [{ Icon: '/images/jenkins.svg', color: '#335061' }],
    iconType: 'svg',
    label: 'Jenkins',
    desc: 'CI/CD',
  },
  {
    icons: [{ Icon: '/images/playwright.svg', color: '#335061' }],
    iconType: 'svg',
    label: 'Playwright',
    desc: 'Automation tool',
  },
];

const Skill = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='headline-2'>Essential Tools I use</h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {skillItem.map(({ icons, iconType, label, desc }, key) => (
            <SkillCard
              key={key}
              icons={icons}
              iconType={iconType}
              label={label}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
