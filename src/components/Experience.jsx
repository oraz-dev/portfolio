import data from '../data';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section className="sec shell" id="experience">
      <SectionHeader num="03" title="Experience" />

      <div className="tl">
        {data.experience.map((entry, index) => (
          <div key={index} className="tl-row">
            <div className="tl-year">{entry.year}</div>

            <div>
              <h3>{entry.title}</h3>
              <span className="tl-role">{entry.role}</span>
              <p>{entry.desc}</p>

              <div className="tl-projects">
                {entry.projects.map((project) => (
                  <div key={project.name} className="tl-project">
                    <b>{project.name}</b>
                    <span>{project.desc}</span>
                  </div>
                ))}
              </div>

              <div className="tl-stack">
                {entry.tags.map((tag) => (
                  <span key={tag} className="tl-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
