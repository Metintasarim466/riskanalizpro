"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Quote, Star } from "lucide-react";
import { useState } from "react";
import type { MouseEvent, ReactNode } from "react";

type Testimonial = {
  initials: string;
  name: string;
  city: string;
  job: string;
  comment: string;
};

const testimonials: Testimonial[] = [
  {
    initials: "AY",
    name: "Ahmet Yılmaz",
    city: "İstanbul",
    job: "Yazılım Mühendisi",
    comment:
      "Risk Analiz sayesinde kredi başvurusu yapmadan önce finansal durumumu net olarak gördüm. AI önerileri gerçekten yol gösterici oldu.",
  },
  {
    initials: "AD",
    name: "Ayşe Demir",
    city: "Ankara",
    job: "Muhasebeci",
    comment:
      "Gelir ve borç analizleri oldukça başarılı. Platform profesyonel ve güven veriyor.",
  },
  {
    initials: "MK",
    name: "Mehmet Kaya",
    city: "İzmir",
    job: "İşletme Sahibi",
    comment:
      "Banka uyumluluğu özelliği sayesinde hangi bankaya başvurmam gerektiğini öğrendim.",
  },
  {
    initials: "ZA",
    name: "Zeynep Aydın",
    city: "Bursa",
    job: "Doktor",
    comment:
      "Finansal raporlar sade, anlaşılır ve oldukça profesyonel hazırlanmış.",
  },
  {
    initials: "CA",
    name: "Can Arslan",
    city: "Antalya",
    job: "Mimar",
    comment:
      "Premium tasarımı kadar analiz doğruluğu da gerçekten etkileyici.",
  },
  {
    initials: "EŞ",
    name: "Elif Şahin",
    city: "Eskişehir",
    job: "Finans Uzmanı",
    comment:
      "Uzun zamandır kullandığım en başarılı finansal analiz platformlarından biri.",
  },
];

const trustStats = [
  {
    value: "150.000+",
    label: "Risk Analizi",
  },
  {
    value: "24+",
    label: "Anlaşmalı Banka",
  },
  {
    value: "98%",
    label: "Memnuniyet",
  },
  {
    value: "4.9/5",
    label: "Ortalama Puan",
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050b18] py-28 sm:py-32 text-white">

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [.35,.6,.35]
        }}
        transition={{
          duration:10,
          repeat:Infinity,
          ease:"easeInOut"
        }}
        className="absolute left-1/2 top-20 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]"
      />

      <motion.div
        animate={{
          x:[0,-30,0],
          y:[0,20,0]
        }}
        transition={{
          duration:12,
          repeat:Infinity,
          ease:"easeInOut"
        }}
        className="absolute -right-40 bottom-20 -z-10 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]"
      />

      {/* Grid */}

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(14,165,233,.13),transparent_35%),linear-gradient(180deg,#050b18_0%,#081321_50%,#050b18_100%)]"/>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:78px_78px] opacity-20"/>

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.6}}
          viewport={{once:true}}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-100 backdrop-blur-xl">
            ⭐ Kullanıcı Deneyimleri
          </div>

          <h2 className="mt-8 text-5xl font-black">
            Gerçek Kullanıcılardan
            <br/>
            Gerçek Sonuçlar
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Risk Analiz sayesinde binlerce kullanıcı finansal durumunu
            güçlendirdi, kredi uygunluğunu artırdı ve daha bilinçli
            finansal kararlar aldı.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item,index)=>(
            <TiltCard key={item.name}>
              <TestimonialCard
                item={item}
                index={index}
              />
            </TiltCard>
          ))}

        </div>

        <TrustPanel/>

      </div>

    </section>
  );
}
function TestimonialCard({
  item,
  index,
}: {
  item: Testimonial;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[30px] bg-gradient-to-br from-cyan-300/20 via-white/10 to-blue-500/20 p-px"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.18),transparent_70%)]" />

      <div className="relative h-full rounded-[29px] border border-white/10 bg-slate-950/70 p-7 backdrop-blur-2xl">

        <div className="flex items-start justify-between">

          <Avatar initials={item.initials} />

          <Quote
            size={34}
            className="text-cyan-400/60"
          />

        </div>

        <div className="mt-6">

          <h3 className="text-xl font-black">
            {item.name}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {item.job}
          </p>

          <p className="text-sm text-cyan-300">
            {item.city}
          </p>

        </div>

        <div className="mt-5 flex items-center gap-2">

          <BadgeCheck
            size={18}
            className="text-emerald-400"
          />

          <span className="text-sm font-bold text-emerald-300">
            Doğrulanmış Kullanıcı
          </span>

        </div>

        <AnimatedStars />

        <p className="mt-6 leading-8 text-slate-300">
          {item.comment}
        </p>

      </div>
    </motion.article>
  );
}

function Avatar({
  initials,
}: {
  initials: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.12,
      }}
      className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 text-2xl font-black text-slate-950 shadow-[0_0_40px_rgba(34,211,238,.45)]"
    >
      {initials}
    </motion.div>
  );
}

function AnimatedStars() {
  return (
    <div className="mt-6 flex gap-1">
      {[0, 1, 2, 3, 4].map((star) => (
        <motion.div
          key={star}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: star * 0.08,
            duration: 0.4,
          }}
          viewport={{ once: true }}
        >
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        </motion.div>
      ))}
    </div>
  );
}

function TrustPanel() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{ once: true }}
      className="mt-20 rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
    >
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {trustStats.map((item) => (

          <div
            key={item.label}
            className="text-center"
          >

            <h3 className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-5xl font-black text-transparent">
              {item.value}
            </h3>

            <p className="mt-3 font-semibold text-slate-300">
              {item.label}
            </p>

          </div>

        ))}

      </div>
    </motion.div>
  );
}

function TiltCard({
  children,
}: {
  children: ReactNode;
}) {
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  function move(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = (0.5 - y / rect.height) * 8;

    setTilt({
      rotateX,
      rotateY,
    });
  }

  return (
    <motion.div
      onMouseMove={move}
      onMouseLeave={() =>
        setTilt({
          rotateX: 0,
          rotateY: 0,
        })
      }
      animate={tilt}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}