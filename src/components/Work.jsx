/**
 * @copyright 2025 s4metet
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '',
    title: '',
    tags: ['API', 'MVC', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '',
    title: '',
    tags: ['API', 'SPA'],
    projectLink: ''
  },
  {
    imgSrc: '',
    title: '',
    tags: ['Development', 'API'],
    projectLink: ''
  },
  {
    imgSrc: '',
    title: '',
    tags: ['Web-design', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '',
    title: '',
    tags: ['eCommerce', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '',
    title: '',
    tags: ['Web-design', 'Development'],
    projectLink: ''
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Projelerim
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work