export default function SectionHeader({ num, title }) {
  return (
    <div className="sec-head">
      <span className="sec-num">{num}</span>
      <span>{title}</span>
      <span className="sec-rule" />
    </div>
  );
}
