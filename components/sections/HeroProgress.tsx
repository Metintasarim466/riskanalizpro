"use client";

import { motion } from "framer-motion";

interface HeroProgressProps {
  title: string;
  value: number;
}

export default function HeroProgress({
  title,
  value,
}: HeroProgressProps) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-400">
          {title}
        </span>

        <span className="text-sm font-bold text-white">
          %{value}
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600"
        />
      </div>
    </div>
  );
}