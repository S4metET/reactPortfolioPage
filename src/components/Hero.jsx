import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

const Hero = () => {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal(".hero-text", { origin: "top" });
    ScrollReveal().reveal(".hero-image", { origin: "right" });

    const typed = new Typed(".typed-text", {
      strings: ["Front-End Developer", "React Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="hero-text">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Çevrimiçi
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              <span>Merhaba!</span> Ben Samet Eren Terzi
          </h2>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-400">
            <span className="typed-text"></span>
          </h2>
        </div>

        <div className="block hero-image">
          <figure className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[480px] mx-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[30px] lg:rounded-[60px] overflow-hidden">
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt=""
              className="w-full h-auto"
            />
          </figure>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
