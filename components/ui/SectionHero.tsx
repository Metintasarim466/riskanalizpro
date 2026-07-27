type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionHero({
  badge,
  title,
  description,
}: Props) {
  return (
    <section className="border-b border-white/10 py-24">
      <div className="mx-auto max-w-5xl px-8 text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
          {badge}
        </span>

        <h1 className="mt-8 text-5xl font-black text-white md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          {description}
        </p>

      </div>
    </section>
  );
}