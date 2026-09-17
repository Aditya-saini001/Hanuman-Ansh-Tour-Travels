import Image from "next/image";

export default function TeamCard({ name, role, bio, image }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden h-full transition-all hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40 flex flex-col">
      <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-slate-800 text-white flex items-center justify-center text-4xl font-extrabold">
            {initials}
          </div>
        )}
      </div>
      <div className="p-6 text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-secondary mb-1">
            {name}
          </h3>
          <p className="text-accent-hover font-semibold text-xs sm:text-sm mb-3">
            {role}
          </p>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}
