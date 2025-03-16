import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const aboutItems = [
  {
    label: "Proje",
    number: 60,
  },
  {
    label: "Deneyim Yılı",
    number: 1,
  },
];

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-up", {
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      delay: 200,
      reset: true,
    });

    ScrollReveal().reveal(".about-item", {
      origin: "left",
      distance: "50px",
      duration: 1500,
      delay: 300,
      reset: true,
      interval: 200,
    });
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:w-full">
            Junior Front-End Developer olarak, HTML, CSS ve JavaScript ile
            kullanıcı dostu ve etkileşimli arayüzler geliştiriyorum. Yeni
            başlayan biri olarak, kullanıcı deneyimini iyileştiren çözümler
            üretmeye odaklanıyor, duyarlı web siteleri tasarlayarak her cihazda
            sorunsuz çalışan arayüzler oluşturuyorum.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key} className="about-item">
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/favicon.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px] about-item"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;