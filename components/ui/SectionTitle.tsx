type Props = {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
};

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-400">
        {badge}
      </span>

      <h2 className="mt-8 text-5xl font-black">
        {title}

        {highlight && (
          <span className="text-cyan-400"> {highlight}</span>
        )}
      </h2>

      <p className="mt-6 text-lg leading-9 text-gray-400">
        {description}
      </p>
    </div>
  );
}