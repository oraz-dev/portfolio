import data from '../data';
import SectionHeader from './SectionHeader';
import { ArrowIcon } from '../Icons';

export default function Projects() {
  return (
    <section className="sec shell" id="work">
      <SectionHeader num="02" title="Selected work" />

      <div className="proj-list">
        {data.projects.map((project) => (
          <a
            key={project.num}
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-row"
          >
            <div className="proj-num">{project.num}</div>

            <div className="proj-main">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="proj-aside">
              <span className="proj-year">{project.year}</span>
              <span className="proj-arrow">
                <ArrowIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
