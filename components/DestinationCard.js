import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({
  image,
  alt,
  title,
  description,
  href,
  cta = "Book Now",
}) {
  return (
    <div className="bg-white rounded-[22px] overflow-hidden border border-slate-200 shadow-card transition-all h-full flex flex-col justify-between hover:-translate-y-2 hover:border-primary hover:shadow-[0_22px_35px_-10px_rgba(13,148,136,0.25)]">
      <div className="relative h-[220px] w-full">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-secondary mb-2">
            {title}
          </h3>
          <p className="text-slate-500 text-sm font-medium mb-4">
            {description}
          </p>
        </div>
        <Link
          href={href}
          className="block text-center w-full rounded-2xl px-5 py-3 text-white font-extrabold bg-gradient-to-br from-primary to-primary-dark transition-all hover:opacity-95 hover:scale-[1.02]"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
