type Admin = {
  name: string;
  email: string;
};

export default function Header({
  admin,
}: {
  admin: Admin;
}) {
  const initial = admin.name
    .charAt(0)
    .toUpperCase();

  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#080d1a] px-8">
      <h2 className="text-xl font-semibold text-white">
        Yönetim Paneli
      </h2>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold text-white">
            {admin.name}
          </p>

          <p className="text-xs text-gray-400">
            {admin.email}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
          {initial}
        </div>
      </div>
    </header>
  );
}