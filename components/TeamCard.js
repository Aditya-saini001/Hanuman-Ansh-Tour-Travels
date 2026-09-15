export default function TeamCard({ name, role, bio }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-white rounded-[22px] border border-slate-200 shadow-card p-7 text-center h-full transition-all hover:-translate-y-1.5 hover:border-primary">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">
        {initials}
      </div>
      <h3 className="text-lg font-extrabold text-secondary mb-1">{name}</h3>
      <p className="text-accent-hover font-bold text-sm mb-3">{role}</p>
      <p className="text-slate-500 text-sm font-medium">{bio}</p>
    </div>
  );
}
