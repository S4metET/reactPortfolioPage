const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Çevrimiçi
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Merhaba! Ben Samet Eren Terzi
          </h2>
          <h2>Front End Developer</h2>
        </div>

        <div className="block">
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