type Props = {
  title: string;
  value: number;
};

export default function DashboardCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#080d1a] p-6 shadow-sm">
      <p className="text-sm text-gray-400">
        {title}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white">
        {value}
      </h2>
    </div>
  );
}