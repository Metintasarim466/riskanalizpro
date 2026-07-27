"use client";

import { motion } from "framer-motion";

import {
  Wallet,
  Landmark,
  CreditCard,
  BriefcaseBusiness,
  Home,
  BadgeDollarSign,
  TrendingUp,
} from "lucide-react";

export type FinancialInformationData = {
  monthlyIncome: number;
  monthlyExpense: number;
  totalDebt: number;
  creditCardDebt: number;
  creditScore: number;
  requestedCredit: number;
  installment: number;
  workStatus: string;
  homeStatus: string;
  selectedBank: string;
};

type Props = {
  data: FinancialInformationData;
  onChange: (
    field: keyof FinancialInformationData,
    value: string | number
  ) => void;
};

const workStatuses = [
  "Sigortalı",
  "Memur",
  "Emekli",
  "Serbest Meslek",
  "Şirket Sahibi",
  "Çalışmıyor",
];

const homeStatuses = [
  "Kendi Evi",
  "Kira",
  "Aile Yanında",
];

const banks = [
  "Ziraat Bankası",
  "Vakıfbank",
  "Halkbank",
  "İş Bankası",
  "Garanti BBVA",
  "Akbank",
  "Yapı Kredi",
  "QNB",
  "DenizBank",
  "TEB",
  "ING",
];

export default function FinancialInformation({
  data,
  onChange,
}: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .6,
      }}
      className="mt-12 rounded-[35px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
    >
      <div className="mb-10">

        <h2 className="text-3xl font-black text-white">

          Finansal Bilgiler

        </h2>

        <p className="mt-3 text-slate-400">

          Finansal durumunuz AI sistemi tarafından analiz edilir.

        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <NumberField
          icon={Wallet}
          label="Aylık Gelir"
          value={data.monthlyIncome}
          onChange={(v)=>
            onChange("monthlyIncome",v)
          }
        />

        <NumberField
          icon={BadgeDollarSign}
          label="Aylık Gider"
          value={data.monthlyExpense}
          onChange={(v)=>
            onChange("monthlyExpense",v)
          }
        />

        <NumberField
          icon={Landmark}
          label="Toplam Borç"
          value={data.totalDebt}
          onChange={(v)=>
            onChange("totalDebt",v)
          }
        />

        <NumberField
          icon={CreditCard}
          label="Kredi Kartı Borcu"
          value={data.creditCardDebt}
          onChange={(v)=>
            onChange("creditCardDebt",v)
          }
        />
                <NumberField
          icon={TrendingUp}
          label="Kredi Notu"
          value={data.creditScore}
          onChange={(v)=>
            onChange("creditScore",v)
          }
        />

        <NumberField
          icon={Landmark}
          label="Talep Edilen Kredi"
          value={data.requestedCredit}
          onChange={(v)=>
            onChange("requestedCredit",v)
          }
        />

        <NumberField
          icon={Wallet}
          label="Vade (Ay)"
          value={data.installment}
          onChange={(v)=>
            onChange("installment",v)
          }
        />

        <SelectField
          icon={BriefcaseBusiness}
          label="Çalışma Durumu"
          value={data.workStatus}
          options={workStatuses}
          onChange={(v)=>
            onChange("workStatus",v)
          }
        />

        <SelectField
          icon={Home}
          label="Konut Durumu"
          value={data.homeStatus}
          options={homeStatuses}
          onChange={(v)=>
            onChange("homeStatus",v)
          }
        />

        <SelectField
          icon={Landmark}
          label="Tercih Edilen Banka"
          value={data.selectedBank}
          options={banks}
          onChange={(v)=>
            onChange("selectedBank",v)
          }
        />

      </div>

      <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-xl font-bold text-white">

              Finansal Analiz

            </h3>

            <p className="mt-2 text-slate-400">

              Girdiğiniz bilgiler canlı olarak
              AI Risk Analizi sistemine aktarılır.

            </p>

          </div>

          <TrendingUp
            size={34}
            className="text-cyan-400"
          />

        </div>

      </div>

    </motion.section>

  );

}
function NumberField({
  icon: Icon,
  label,
  value,
  onChange,
}: {
  icon: any;
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>

      <label className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-300">

        <Icon
          size={18}
          className="text-cyan-300"
        />

        {label}

      </label>

      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          px-5
          py-4
          text-lg
          font-semibold
          text-white
          outline-none
          transition-all
          duration-300
          focus:border-cyan-400
          focus:ring-4
          focus:ring-cyan-500/10
          hover:border-cyan-300/30
        "
      />

    </div>
  );
}

function SelectField({
  icon: Icon,
  label,
  value,
  options,
  onChange,
}: {
  icon: any;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>

      <label className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-300">

        <Icon
          size={18}
          className="text-cyan-300"
        />

        {label}

      </label>

      <div className="relative">

        <select
          value={value}
          onChange={(e)=>onChange(e.target.value)}
          className="
            w-full
            appearance-none
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            px-5
            py-4
            pr-12
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-500/10
            hover:border-cyan-300/30
            [&_option]:bg-[#071321]
          "
        >

          <option value="">
            Seçiniz
          </option>

          {options.map((option)=>(
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}

        </select>

        <svg
          className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>

    </div>
  );
}