/**
 * @copyright 2025 s4metet
 * @license Apache-2.0
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const sectionRefs = useRef({});

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
      activeBox.current.style.opacity = '1';
      activeBox.current.style.transition = 'all 0.3s ease-in-out';
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleSection = null;
        let maxIntersectionRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            mostVisibleSection = entry.target;
            maxIntersectionRatio = entry.intersectionRatio;
          }
        });

        if (mostVisibleSection) {
          const activeLink = document.querySelector(`a[href="#${mostVisibleSection.id}"]`);
          if (activeLink && lastActiveLink.current !== activeLink) {
            lastActiveLink.current?.classList.remove('active');
            activeLink.classList.add('active');
            lastActiveLink.current = activeLink;
            initActiveBox();
          }
        }
      },
      { threshold: [0.3, 0.6, 0.9] }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('resize', initActiveBox);
      observer.disconnect();
    };
  }, []);

  const activeCurrentLink = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: 'Ana Sayfa', link: '#home', className: 'nav-link' },
    { label: 'Ben Kimim', link: '#about', className: 'nav-link' },
    { label: 'Projelerim', link: '#work', className: 'nav-link' },
    { label: 'Bana Ulaşın', link: '#contact', className: 'nav-link' }
  ];

  useEffect(() => {
    navItems.forEach(({ link }) => {
      const sectionId = link.replace('#', '');
      sectionRefs.current[sectionId] = document.getElementById(sectionId);
    });
  }, []);

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox} style={{ opacity: 0 }}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;