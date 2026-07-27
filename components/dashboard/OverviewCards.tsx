export default function OverviewCards() {

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {[
        "$1.24M",
        "+18.46%",
        "18 Assets",
        "$14K Profit",
      ].map((item) => (

        <div
          key={item}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >

          <p className="text-gray-400">
            Overview
          </p>

          <h2 className="mt-3 text-3xl font-black">
            {item}
          </h2>

        </div>

      ))}

    </div>

  );

}