export default function SectionHeader({ title, highlight, subtitle }) {
  return (
    <div className="text-center mb-11">
      <h2 className="font-black text-secondary text-3xl md:text-4xl">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-[1.05rem] font-semibold max-w-2xl mx-auto mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
}
