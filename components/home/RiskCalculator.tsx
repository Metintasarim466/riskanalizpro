"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  BadgeCheck,
  Banknote,
  BrainCircuit,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  CreditCard,
  Home,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import type {
  ChangeEvent,
  MouseEvent,
  ReactNode,
} from "react";

import type { LucideIcon } from "lucide-react";

type WorkStatus =
  | "Sigortalı"
  | "Serbest"
  | "Emekli"
  | "Öğrenci"
  | "Çalışmıyor";

type HomeStatus =
  | "Kira"
  | "Kendi Evi";

type FormState = {
  income: number;
  expense: number;
  totalDebt: number;
  creditCardDebt: number;
  creditScore: number;
  workStatus: WorkStatus;
  homeStatus: HomeStatus;
  delayedPayment: boolean;
};

const workStatuses: WorkStatus[] = [
  "Sigortalı",
  "Serbest",
  "Emekli",
  "Öğrenci",
  "Çalışmıyor",
];

const homeStatuses: HomeStatus[] = [
  "Kira",
  "Kendi Evi",
];

const initialState: FormState = {
  income: 45000,
  expense: 18000,
  totalDebt: 85000,
  creditCardDebt: 22000,
  creditScore: 1450,
  workStatus: "Sigortalı",
  homeStatus: "Kira",
  delayedPayment: false,
};

export default function RiskCalculator() {
  const [form, setForm] =
    useState<FormState>(initialState);

  const [loading, setLoading] =
    useState(false);

  const result = useMemo(
    () => calculateRiskScore(form),
    [form]
  );

  function updateNumber(
    field: keyof Pick<
      FormState,
      | "income"
      | "expense"
      | "totalDebt"
      | "creditCardDebt"
      | "creditScore"
    >
  ) {
    return (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      setForm((current) => ({
        ...current,
        [field]:
          Number(event.target.value) || 0,
      }));
    };
  }

  function handleSubmit() {
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
    }, 900);
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#050b18] py-28 text-white sm:py-32">

      {/* Animated Glow */}

      <motion.div
        aria-hidden
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-12 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[170px]"
      />

      <motion.div
        aria-hidden
        animate={{
          x: [0, -35, 0],
          y: [0, 22, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-44 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[150px]"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(14,165,233,.14),transparent_32%),linear-gradient(180deg,#050b18_0%,#081321_50%,#050b18_100%)]"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:78px_78px] opacity-20"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        <motion.header
          initial={{
            opacity: 0,
            y: 30,
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
          className="mx-auto max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-cyan-100 backdrop-blur-xl">

            <Calculator
              size={18}
              className="text-cyan-300"
            />

            AI Risk Hesaplama

          </div>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">

            Kredi Risk Skorunu Hesapla

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">

            Gelir, gider, kredi notu ve finansal
            bilgilerinizi girin. Yapay zeka destekli
            analiz motorumuz saniyeler içinde
            risk skorunuzu oluştursun.

          </p>

        </motion.header>
                <TiltCard
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-white/10 to-blue-500/20 p-px shadow-[0_35px_120px_rgba(8,47,73,.36)]"
        >
          <div className="grid gap-8 rounded-[1.95rem] border border-white/10 bg-slate-950/75 p-6 backdrop-blur-2xl lg:grid-cols-[1fr_.92fr]">

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div>

                <p className="text-sm font-bold text-cyan-300">
                  Finansal Bilgiler
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  AI Risk Analizi Formu
                </h3>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <Field
                  icon={Banknote}
                  label="Aylık Gelir"
                  value={form.income}
                  onChange={updateNumber("income")}
                />

                <Field
                  icon={WalletCards}
                  label="Aylık Gider"
                  value={form.expense}
                  onChange={updateNumber("expense")}
                />

                <Field
                  icon={TrendingUp}
                  label="Toplam Borç"
                  value={form.totalDebt}
                  onChange={updateNumber("totalDebt")}
                />

                <Field
                  icon={CreditCard}
                  label="Kredi Kartı Borcu"
                  value={form.creditCardDebt}
                  onChange={updateNumber("creditCardDebt")}
                />

                <Field
                  icon={BadgeCheck}
                  label="Kredi Notu"
                  value={form.creditScore}
                  onChange={updateNumber("creditScore")}
                />

                <SelectField
                  icon={BriefcaseBusiness}
                  label="Çalışma Durumu"
                  value={form.workStatus}
                  options={workStatuses}
                  onChange={(value) =>
                    setForm((current) => ({
                      ...current,
                      workStatus: value,
                    }))
                  }
                />

              </div>

              <SelectField
                icon={Home}
                label="Konut Durumu"
                value={form.homeStatus}
                options={homeStatuses}
                onChange={(value) =>
                  setForm((current) => ({
                    ...current,
                    homeStatus: value,
                  }))
                }
              />

              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-slate-300 transition hover:border-cyan-300/30">

                <input
                  type="checkbox"
                  checked={form.delayedPayment}
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      delayedPayment: e.target.checked,
                    }))
                  }
                  className="h-5 w-5 rounded border-white/20 bg-slate-950 accent-cyan-400"
                />

                Son 12 ay içerisinde gecikmeli ödeme yaptım

              </label>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: .98,
                }}
                type="submit"
                disabled={loading}
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-8 py-4 text-base font-black text-slate-950 shadow-[0_20px_80px_rgba(34,211,238,.35)]"
              >

                <motion.div
                  animate={{
                    x: ["-100%", "220%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />

                {loading ? (
                  <>
                    <span className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-slate-900/20 border-t-slate-900" />
                    AI Analiz Ediliyor...
                  </>
                ) : (
                  <>
                    <ShieldCheck
                      size={20}
                      className="mr-2 transition group-hover:rotate-6"
                    />
                    Risk Skorumu Hesapla
                  </>
                )}

              </motion.button>

            </form>

            <PreviewPanel result={result} />

          </div>
        </TiltCard>

      </div>

    </section>

  );
}
function Field({
  icon: Icon,
  label,
  value,
  onChange,
}: {
  icon: LucideIcon;
  label: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] transition hover:border-cyan-300/25 focus-within:border-cyan-300/60 focus-within:ring-4 focus-within:ring-cyan-300/10">

      <span className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-300">
        <Icon size={17} className="text-cyan-300" />
        {label}
      </span>

      <input
        type="number"
        min={0}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-xl font-black text-white outline-none placeholder:text-slate-600"
      />

    </label>
  );
}

function SelectField<T extends string>({
  icon: Icon,
  label,
  value,
  options,
  onChange,
}: {
  icon: LucideIcon;
  label: string;
  value: T;
  options: T[];
  onChange: (value: T) => void;
}) {
  return (
    <label className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] transition hover:border-cyan-300/25 focus-within:border-cyan-300/60 focus-within:ring-4 focus-within:ring-cyan-300/10">

      <span className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-300">
        <Icon size={17} className="text-cyan-300" />
        {label}
      </span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full bg-transparent text-xl font-black text-white outline-none [&_option]:bg-slate-950"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

    </label>
  );
}

function PreviewPanel({
  result,
}: {
  result: {
    score: number;
    level: string;
    color: string;
    bankCompatibility: number;
    approvalRate: number;
    aiConfidence: number;
  };
}) {
  return (
    <TiltCard
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-2xl"
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-bold text-cyan-300">
            AI Risk Analizi
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            Canlı Sonuç
          </h3>

        </div>

        <BrainCircuit
          className="text-cyan-300"
          size={28}
        />

      </div>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-200">

        <BrainCircuit size={16} />

        AI tarafından hesaplandı

      </div>

      <CircularScore
        score={result.score}
        color={result.color}
      />

      <div className="mt-6 text-center">

        <p className="text-sm text-slate-400">
          Risk Seviyesi
        </p>

        <motion.p
          key={result.level}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className={`mt-2 text-3xl font-black ${result.color}`}
        >
          {result.level}
        </motion.p>

      </div>

      <div className="mt-8 grid gap-4">

        <PreviewMetric
          title="Banka Uyumu"
          value={result.bankCompatibility}
          suffix="%"
          icon={ShieldCheck}
        />

        <PreviewMetric
          title="Onay Oranı"
          value={result.approvalRate}
          suffix="%"
          icon={CheckCircle2}
        />

        <PreviewMetric
          title="AI Güven Skoru"
          value={result.aiConfidence}
          suffix="%"
          icon={BrainCircuit}
        />

      </div>

    </TiltCard>
  );
}

function PreviewMetric({
  title,
  value,
  suffix,
  icon: Icon,
}: {
  title: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4"
    >

      <div className="flex items-center gap-3">

        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">

          <Icon size={20} />

        </span>

        <span className="text-sm font-bold text-slate-300">
          {title}
        </span>

      </div>

      <span className="text-xl font-black text-white">

        <CountUp
          end={value}
          duration={0.7}
        />

        {suffix}

      </span>

    </motion.div>
  );
}
function CircularScore({
  score,
  color,
}: {
  score: number;
  color: string;
}) {
  const ringColor = getRiskTone(score).hex;

  return (
    <div className="relative mx-auto mt-8 h-56 w-56">

      <motion.div
        animate={{
          background: `conic-gradient(${ringColor} ${score * 3.6}deg, rgba(255,255,255,.08) 0deg)`,
          boxShadow: `0 0 55px ${ringColor}55, inset 0 0 24px rgba(255,255,255,.08)`,
        }}
        transition={{
          duration: 0.8,
        }}
        className="absolute inset-0 rounded-full p-[14px]"
      >
        <div className="h-full w-full rounded-full bg-slate-950" />
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
        className="absolute inset-6 rounded-full border border-white/10"
        style={{
          boxShadow: `0 0 35px ${ringColor}`,
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <span className={`text-6xl font-black ${color}`}>
          <CountUp
            end={score}
            duration={0.8}
          />
        </span>

        <span className="mt-2 text-sm font-bold text-slate-400">
          Risk Skoru
        </span>

      </div>

    </div>
  );
}

function calculateRiskScore(form: FormState) {
  const disposableIncome = form.income - form.expense;

  const debtRatio =
    form.income > 0
      ? form.totalDebt / Math.max(form.income * 12, 1)
      : 1;

  const cardDebtRatio =
    form.income > 0
      ? form.creditCardDebt / Math.max(form.income, 1)
      : 1;

  let score = 45;

  score += clamp(form.income / 2500, 0, 22);
  score += clamp(disposableIncome / 1800, -18, 18);
  score += clamp((form.creditScore - 900) / 18, -18, 26);

  score -= clamp(debtRatio * 32, 0, 28);
  score -= clamp(cardDebtRatio * 18, 0, 18);

  switch (form.workStatus) {
    case "Sigortalı":
      score += 8;
      break;

    case "Serbest":
      score += 2;
      break;

    case "Emekli":
      score += 5;
      break;

    case "Öğrenci":
      score -= 8;
      break;

    case "Çalışmıyor":
      score -= 16;
      break;
  }

  if (form.homeStatus === "Kendi Evi") {
    score += 6;
  }

  if (form.delayedPayment) {
    score -= 22;
  }

  const finalScore = Math.round(clamp(score, 0, 100));

  const level =
    finalScore >= 75
      ? "Düşük Risk"
      : finalScore >= 50
      ? "Orta Risk"
      : "Yüksek Risk";

  const color =
    finalScore >= 75
      ? "text-cyan-300"
      : finalScore >= 50
      ? "text-orange-300"
      : "text-red-300";

  return {
    score: finalScore,
    level,
    color,
    bankCompatibility: Math.round(clamp(finalScore + 4, 0, 99)),
    approvalRate: Math.round(clamp(finalScore - 2, 0, 98)),
    aiConfidence: Math.round(clamp(82 + finalScore / 8, 0, 99)),
  };
}

function clamp(
  value: number,
  min: number,
  max: number
) {
  return Math.min(
    Math.max(value, min),
    max
  );
}

function getRiskTone(score: number) {
  if (score >= 75) {
    return {
      hex: "#22d3ee",
    };
  }

  if (score >= 50) {
    return {
      hex: "#fb923c",
    };
  }

  return {
    hex: "#f87171",
  };
}

function TiltCard({
  children,
  className,
  ...motionProps
}: {
  children: ReactNode;
  className?: string;
} & React.ComponentProps<typeof motion.div>) {
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  function handleMouseMove(
    event: MouseEvent<HTMLDivElement>
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY =
      (x / rect.width - 0.5) * 6;

    const rotateX =
      (0.5 - y / rect.height) * 6;

    setTilt({
      rotateX,
      rotateY,
    });
  }

  return (
    <motion.div
      {...motionProps}
      onMouseMove={handleMouseMove}
      onMouseLeave={() =>
        setTilt({
          rotateX: 0,
          rotateY: 0,
        })
      }
      animate={{
        ...(typeof motionProps.animate === "object"
          ? motionProps.animate
          : {}),
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      style={{
        transformStyle: "preserve-3d",
        ...(motionProps.style ?? {}),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
