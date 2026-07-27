"use client";

import { motion } from "framer-motion";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-8">

        <motion.h2
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="text-center text-5xl font-black"
        >
          Why Choose
          <span className="text-cyan-400"> FINOVA</span>
        </motion.h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
          Modern yatırımcılar için geliştirilen yeni nesil finans platformu.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item,index)=>(

            <motion.div
              key={index}
              initial={{ opacity:0,y:40 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*.15 }}
              whileHover={{
                y:-8,
                scale:1.02
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="text-6xl">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}