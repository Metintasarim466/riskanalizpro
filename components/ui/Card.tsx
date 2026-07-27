type Props = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,.18)]">
      {children}
    </div>
  );
}