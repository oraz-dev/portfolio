import data from '../data';
import SectionHeader from './SectionHeader';

function renderInlineMarkdown(text) {
  const tokens = [];
  const pattern = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let cursor = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      tokens.push(text.slice(cursor, match.index));
    }

    if (match[1]) {
      tokens.push(<strong key={match.index}>{match[1]}</strong>);
    } else if (match[2]) {
      tokens.push(<em key={match.index}>{match[2]}</em>);
    }

    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    tokens.push(text.slice(cursor));
  }

  return tokens;
}

export default function About() {
  return (
    <section className="sec shell" id="about">
      <SectionHeader num="01" title="About" />

      <div className="about-grid">
        <dl className="about-aside">
          <div>
            <dt>Name</dt>
            <dd>{data.name}</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{data.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{data.whatIDo.join(' · ')}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{data.stack.join(', ')}</dd>
          </div>
        </dl>

        <div className="about-body">
          {data.bio.map((paragraph, index) => (
            <p key={index}>{renderInlineMarkdown(paragraph)}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
