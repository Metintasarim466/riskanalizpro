"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Wallet,
  Landmark,
  Briefcase,
  Home,
  TrendingUp,
} from "lucide-react";

type WorkStatus =
  | "Sigortalı"
  | "Memur"
  | "Emekli"
  | "Serbest Meslek"
  | "Şirket Sahibi";

type HomeStatus =
  | "Kira"
  | "Kendi Evi"
  | "Aile Yanında";

export default function RiskCalculator() {
  const [income, setIncome] = useState(45000);
  const [debt, setDebt] = useState(5000);
  const [credit, setCredit] = useState(250000);
  const [term, setTerm] = useState(24);

  const [workStatus, setWorkStatus] =
    useState<WorkStatus>("Sigortalı");

  const [homeStatus, setHomeStatus] =
    useState<HomeStatus>("Kira");

  const debtRatio = useMemo(() => {
    return Math.round((debt / income) * 100);
  }, [income, debt]);

  // Hesaplama ikinci bölümde gelecek
  const riskScore = 82;
  const riskLevel = "Düşük";
  const approvalChance = 91;

  return (
    <section
      id="risk"
      className="relative py-28 bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl font-black text-white">
            Risk Hesaplayıcı
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-slate-400">
            Gelir ve borç bilgilerinize göre
            tahmini kredi risk skorunuzu öğrenin.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* SOL TARAF */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="mb-8 flex items-center gap-3">

              <Calculator className="text-cyan-400" />

              <h3 className="text-2xl font-bold text-white">
                Finansal Bilgiler
              </h3>

            </div>

            {/* GELİR */}

            <div className="mb-8">

              <div className="mb-3 flex items-center gap-2">

                <Wallet
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-slate-300">
                  Aylık Gelir
                </span>

              </div>

              <input
                type="range"
                min={10000}
                max={250000}
                step={1000}
                value={income}
                onChange={(e) =>
                  setIncome(Number(e.target.value))
                }
                className="w-full"
              />

              <div className="mt-2 text-cyan-400 font-bold">
                {income.toLocaleString("tr-TR")} ₺
              </div>

            </div>

            {/* BORÇ */}

            <div className="mb-8">

              <div className="mb-3 flex items-center gap-2">

                <Landmark
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-slate-300">
                  Aylık Borç
                </span>

              </div>

              <input
                type="range"
                min={0}
                max={150000}
                step={1000}
                value={debt}
                onChange={(e) =>
                  setDebt(Number(e.target.value))
                }
                className="w-full"
              />

              <div className="mt-2 text-cyan-400 font-bold">
                {debt.toLocaleString("tr-TR")} ₺
              </div>

            </div>

            {/* KREDİ */}

            <div className="mb-8">

              <label className="text-slate-300">
                Talep Edilen Kredi
              </label>

              <input
                type="number"
                value={credit}
                onChange={(e) =>
                  setCredit(Number(e.target.value))
                }
                className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white"
              />

            </div>

            {/* VADE */}

            <div className="mb-8">

              <label className="text-slate-300">
                Vade
              </label>

              <select
                value={term}
                onChange={(e) =>
                  setTerm(Number(e.target.value))
                }
                className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white"
              >
                <option>12</option>
                <option>24</option>
                <option>36</option>
                <option>48</option>
                <option>60</option>
              </select>

            </div>

            {/* ÇALIŞMA */}

            <div className="mb-8">

              <label className="flex items-center gap-2 text-slate-300">

                <Briefcase size={18} />

                Çalışma Durumu

              </label>

              <select
                value={workStatus}
                onChange={(e) =>
                  setWorkStatus(e.target.value as WorkStatus)
                }
                className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white"
              >
                <option>Sigortalı</option>
                <option>Memur</option>
                <option>Emekli</option>
                <option>Serbest Meslek</option>
                <option>Şirket Sahibi</option>
              </select>

            </div>

            {/* EV */}

            <div>

              <label className="flex items-center gap-2 text-slate-300">

                <Home size={18} />

                Konut Durumu

              </label>

              <select
                value={homeStatus}
                onChange={(e) =>
                  setHomeStatus(e.target.value as HomeStatus)
                }
                className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white"
              >
                <option>Kira</option>
                <option>Kendi Evi</option>
                <option>Aile Yanında</option>
              </select>

            </div>

          </motion.div>
                    {/* SAĞ TARAF */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-400">
                  Tahmini Risk Skoru
                </p>

                <h2 className="mt-2 text-7xl font-black text-cyan-400">
                  {riskScore}
                </h2>
              </div>

              <TrendingUp
                className="text-cyan-400"
                size={60}
              />

            </div>

            {/* Risk Bar */}

            <div className="mt-8">

              <div className="mb-3 flex justify-between">

                <span className="text-slate-400">
                  Risk Oranı
                </span>

                <span className="font-bold text-white">
                  {riskScore}%
                </span>

              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-800">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${riskScore}%` }}
                  transition={{
                    duration: 1.5,
                  }}
                  className="h-full rounded-full bg-cyan-400"
                />

              </div>

            </div>

            {/* Kartlar */}

            <div className="mt-10 grid gap-5">

              <Card
                title="Borç / Gelir Oranı"
                value={`%${debtRatio}`}
              />

              <Card
                title="Risk Seviyesi"
                value={riskLevel}
              />

              <Card
                title="Ön Onay Olasılığı"
                value={`%${approvalChance}`}
              />

              <Card
                title="Kredi Talebi"
                value={`${credit.toLocaleString("tr-TR")} ₺`}
              />

              <Card
                title="Vade"
                value={`${term} Ay`}
              />

              <Card
                title="Çalışma Durumu"
                value={workStatus}
              />

              <Card
                title="Konut"
                value={homeStatus}
              />

            </div>

            {/* AI Sonucu */}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6"
            >

              <h3 className="text-xl font-bold text-cyan-400">
                🤖 AI Finans Yorumu
              </h3>

              <p className="mt-4 leading-8 text-slate-300">

                Gelir durumunuz kredi kullanımına uygundur.

                Borç oranınız kontrol altında görünüyor.

                Bu verilere göre birçok banka için
                ön değerlendirme sonucunuz olumlu
                görünmektedir.

              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>

  );

}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {

  return (

    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5">

      <span className="text-slate-400">
        {title}
      </span>

      <span className="font-bold text-white">
        {value}
      </span>

    </div>

  );

}