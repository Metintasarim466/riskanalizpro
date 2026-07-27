type Props = {
  children: React.ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
      {children}
    </span>
  );
}