
"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-black">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic{" "}
            <span className="text-indigo-400">background.</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 border border-white/10 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-indigo-400/30"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-indigo-400/20 bg-indigo-400/[0.06]">
              <GraduationCap size={24} className="text-indigo-400" />
            </div>

            {/* Details */}
            <div className="flex-1">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    B.Tech in Computer Science & Engineering
                  </h3>

                  <p className="mt-1 text-sm font-medium text-indigo-300">
                    Artificial Intelligence & Machine Learning
                  </p>
                </div>

                <span className="text-sm text-zinc-500">
                  2022 – 2026
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-zinc-400">
                Technocrats Institute of Technology & Science, Bhopal
              </p>

              <div className="mt-5 inline-flex border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300">
                CGPA: 7.41 / 10
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

