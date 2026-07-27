"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wallet,
  CreditCard,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/ui/Card";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="space-y-6"
    >
      <Card>

        <div className="p-8">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Risk Skoru
              </p>

              <h2 className="mt-2 text-5xl font-black text-cyan-400">
                92
              </h2>

            </div>

            <ShieldCheck
              size={46}
              className="text-cyan-400"
            />

          </div>

          <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ duration: 1.5 }}
              className="h-full rounded-full bg-cyan-400"
            />

          </div>

        </div>

      </Card>

      <div className="grid grid-cols-2 gap-6">

        <MiniCard
          icon={<Wallet size={26} />}
          title="Gelir"
          value="₺92.000"
        />

        <MiniCard
          icon={<CreditCard size={26} />}
          title="Borç"
          value="₺185.200"
        />

      </div>

      <Card>

        <div className="p-8">

          <div className="mb-5 flex items-center gap-3">

            <TrendingUp className="text-cyan-400" />

            <h3 className="text-xl font-bold">
              Kredi Notu
            </h3>

          </div>

          <div className="flex items-end gap-4">

            <span className="text-5xl font-black">
              1542
            </span>

            <span className="text-green-400">
              +38
            </span>

          </div>

        </div>

      </Card>

    </motion.div>
  );
}

function MiniCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <Card>

      <div className="p-6">

        <div className="mb-5 text-cyan-400">
          {icon}
        </div>

        <p className="text-sm text-gray-400">
          {title}
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          {value}
        </h3>

      </div>

    </Card>
  );
}