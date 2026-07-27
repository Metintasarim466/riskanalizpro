import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import OverviewCards from "@/components/dashboard/OverviewCards";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1">

        <Header />

        <div className="p-8">

          <OverviewCards />

        </div>

      </main>

    </div>
  );
}