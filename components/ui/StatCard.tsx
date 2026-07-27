import Card from "./Card";

type Props = {
  value: string;
  title: string;
};

export default function StatCard({
  value,
  title,
}: Props) {
  return (
    <Card>
      <div className="p-8 text-center">
        <h3 className="text-5xl font-black text-cyan-400">
          {value}
        </h3>

        <p className="mt-3 text-gray-400">
          {title}
        </p>
      </div>
    </Card>
  );
}