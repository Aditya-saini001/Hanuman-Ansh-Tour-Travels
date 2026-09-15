import Image from "next/image";
import Link from "next/link";

export default function TourPackageCard({
  image,
  alt,
  title,
  duration,
  inclusions,
  href,
  cta = "Book Package Now",
  highlighted = false,
}) {
  return (
    <div
      className={`rounded-[22px] overflow-hidden border shadow-card h-full flex flex-col justify-between transition-all hover:-translate-y-2 hover:shadow-[0_22px_35px_-10px_rgba(13,148,136,0.25)] ${
        highlighted
          ? "bg-[#fffdf5] border-accent"
          : "bg-white border-slate-200 hover:border-primary"
      }`}
    >
      <div className="relative h-[190px] w-full">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div
        className={`p-5 text-white ${
          highlighted
            ? "bg-gradient-to-br from-accent-hover to-[#b45309]"
            : "bg-gradient-to-br from-secondary to-slate-800"
        }`}
      >
        <h3 className="text-lg font-bold mb-0">{title}</h3>
        <span
          className={`inline-block text-xs font-extrabold px-3.5 py-1 rounded-full mt-1.5 ${
            highlighted
              ? "bg-white text-[#b45309]"
              : "bg-accent/25 text-accent"
          }`}
        >
          {duration}
        </span>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <ul className="list-none p-0 m-0 mb-5">
          {inclusions.map((inc) => (
            <li
              key={inc}
              className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2"
            >
              <i
                className={`fas fa-check-circle ${
                  highlighted ? "text-accent" : "text-primary"
                }`}
              ></i>
              {inc}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className={`block text-center w-full rounded-2xl px-5 py-3 text-white font-extrabold transition-all hover:opacity-95 hover:scale-[1.02] ${
            highlighted
              ? "bg-gradient-to-br from-accent to-accent-hover"
              : "bg-gradient-to-br from-primary to-primary-dark"
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
