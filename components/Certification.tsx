
"use client";

import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Certification() {
  return (
    <section id="certification" className="section-padding bg-[#050505]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Certification
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional{" "}
            <span className="text-indigo-400">credential.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 border border-white/10 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-indigo-400/30"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-indigo-400/20 bg-indigo-400/[0.06]">
              <Award size={24} className="text-indigo-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold tracking-tight text-white">
                Microsoft Azure Fundamentals
              </h3>

              <p className="mt-1 text-sm font-medium text-indigo-300">
                AZ-900
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">
                Foundational knowledge of cloud concepts, Azure services,
                security, compliance, and Azure pricing and support.
              </p>
            </div>

            <a
              href="https://www.credly.com/badges/8fdcb694-e8a1-42c4-9904-7ab31e8ced29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors duration-200 hover:border-indigo-400/30 hover:text-white sm:self-center"
            >
              View Credential
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 
