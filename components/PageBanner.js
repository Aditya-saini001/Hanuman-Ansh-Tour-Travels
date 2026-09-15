export default function PageBanner({ title, subtitle, image }) {
  return (
    <section
      className="py-[85px] text-center text-white bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.94) 0%, rgba(13,148,136,0.88) 100%), url('${image}')`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          {title}
        </h1>
        <p className="text-lg text-slate-100 font-medium">{subtitle}</p>
      </div>
    </section>
  );
}
