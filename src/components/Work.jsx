import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "",
    title: "Proje 1",
    tags: ["API", "MVC", "Development"],
    projectLink: "#",
  },
  {
    imgSrc: "",
    title: "Proje 2",
    tags: ["API", "SPA"],
    projectLink: "#",
  },
  {
    imgSrc: "",
    title: "Proje 3",
    tags: ["Development", "API"],
    projectLink: "#",
  },
  {
    imgSrc: "",
    title: "Proje 4",
    tags: ["Web-design", "Development"],
    projectLink: "#",
  },
  {
    imgSrc: "",
    title: "Proje 5",
    tags: ["eCommerce", "Development"],
    projectLink: "#",
  },
  {
    imgSrc: "",
    title: "Proje 6",
    tags: ["Web-design", "Development"],
    projectLink: "#",
  },
];
const Work = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-up", {
      origin: "bottom",
      distance: "60px",
      duration: 2000,
      delay: 200,
      reset: true,
    });

    ScrollReveal().reveal(".project-item", {
      origin: "right",
      distance: "50px",
      duration: 1500,
      delay: 200,
      reset: true,
      interval: 150, // Kartların sırayla görünmesi için gecikme
    });
  }, []);
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Projelerim</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="project-item"
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Work;