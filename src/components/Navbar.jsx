import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden',
    },
  ];

  return (
    <div className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a href={link} className={className} key={key} ref={ref}>
          {label}
        </a>
      ))}
    </div>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
