import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".logo", {
      origin: "left",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: true,
    });

    ScrollReveal().reveal(".menu-btn", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 300,
      reset: true,
    });

    ScrollReveal().reveal(".contact-btn", {
      origin: "top",
      distance: "40px",
      duration: 1000,
      delay: 400,
      reset: true,
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

        <h1>
          <a href="/" className="logo">
            <img
              src="/images/favicon.png"
              width={40}
              height={40}
              alt="Henry Clark"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="mailto:s4metet@gmail.com"
          className="btn btn-secondary max-md:hidden md:justify-self-end contact-btn"
        >
          Bana Ulaşın
        </a>
      </div>
    </header>
  );
};

export default Header;
