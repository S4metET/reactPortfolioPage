/**
 * @copyright 2025 s4metet
 * @license Apache-2.0
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const sectionRefs = useRef({});

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      requestAnimationFrame(() => {
        activeBox.current.style.transform = `translate(${lastActiveLink.current.offsetLeft}px, ${lastActiveLink.current.offsetTop}px)`;
        activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
        activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
      });
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);

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
            lastActiveLink.current?.classList.remove("text-white");
            activeLink.classList.add("text-white");
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
      window.removeEventListener("resize", initActiveBox);
      observer.disconnect();
    };
  }, []);

  const activeCurrentLink = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Ana Sayfa", link: "#home" },
    { label: "Ben Kimim", link: "#about" },
    { label: "Projelerim", link: "#work" },
    { label: "Bana Ulaşın", link: "#contact" },
  ];

  useEffect(() => {
    navItems.forEach(({ link }) => {
      const sectionId = link.replace("#", "");
      sectionRefs.current[sectionId] = document.getElementById(sectionId);
    });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 flex justify-center ${
        navOpen ? "active" : ""
      }`}
    >
      <div className="relative flex space-x-4 text-gray-400">
        {navItems.map(({ label, link }, key) => (
          <a
            href={link}
            key={key}
            className="relative px-4 py-2 transition-colors duration-300 hover:text-white"
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        ))}
        {/* Aktif Link Efekti */}
        <div
          ref={activeBox}
          className="absolute top-0 left-0 w-0 h-0 bg-blue-500 rounded-lg transition-all duration-300"
        ></div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
