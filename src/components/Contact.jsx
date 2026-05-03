import { useState } from 'react';
import data from '../data';
import { ArrowUpRightIcon, CopyIcon, CheckIcon } from '../Icons';

function ContactCard({ href, label, value, external, copyValue }) {
  const [copied, setCopied] = useState(false);

  function handleCopy(event) {
    event.preventDefault();
    navigator.clipboard.writeText(copyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="contact-card"
    >
      <span className="ck-label">{label}</span>
      <span className="ck-val">{value}</span>
      <span className="ck-arrow"><ArrowUpRightIcon /></span>

      {copyValue && (
        <button
          className={`contact-copy${copied ? ' copied' : ''}`}
          onClick={handleCopy}
        >
          {copied
            ? <><CheckIcon /> Copied</>
            : <><CopyIcon /> Copy</>
          }
        </button>
      )}
    </a>
  );
}

export default function Contact() {
  return (
    <section className="contact shell" id="contact">
      <div className="contact-pre">04 — Contact</div>

      <h2>
        Have a project, role,<br />
        <em>or just want to say hi?</em>
      </h2>

      <div className="contact-links">
        <ContactCard
          href={`mailto:${data.email}`}
          label="Email"
          value={data.email}
          copyValue={data.email}
        />
        <ContactCard
          href={`tel:${data.phone.replace(/\s/g, '')}`}
          label="Phone"
          value={data.phone}
          copyValue={data.phone}
        />
        <ContactCard
          href={data.github}
          label="GitHub"
          value="@oraz-dev"
          external
        />
        <ContactCard
          href={data.telegram}
          label="Telegram"
          value="@orazdevv"
          external
        />
      </div>
    </section>
  );
}
