"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function SkillCard({ name, img, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center gap-4 rounded-xl border border-white/60 bg-slate-100 p-3 text-slate-800 shadow-sm transition-transform hover:-translate-y-1"
    >
      <Image
        src={img}
        alt={name}
        width={44}
        height={44}
        className="h-11 w-11 object-contain"
      />
      <p className="text-sm font-medium">{name}</p>
    </motion.div>
  );
}
