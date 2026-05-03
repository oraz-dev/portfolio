import data from '../data';

export default function Footer() {
  return (
    <footer className="shell foot">
      <div>&copy; 2026 — {data.name}</div>
      <div>Built with care · Geist · Instrument Serif · JetBrains Mono</div>
    </footer>
  );
}
