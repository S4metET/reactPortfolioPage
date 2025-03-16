import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
];

const Skill = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-up", {
      origin: "bottom",
      distance: "60px",
      duration: 2000,
      delay: 200,
      reset: true,
    });

    ScrollReveal().reveal(".skill-item", {
      origin: "left",
      distance: "50px",
      duration: 1500,
      delay: 200,
      reset: true,
      interval: 150,
    });
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Program Dilleri</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Web siteleri ve uygulamalar oluşturmak için kullandığım programlama
          dilleri.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="skill-item"
            />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Skill;