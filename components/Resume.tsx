"use client";

import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-black">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 bg-white/[0.02] p-7 sm:p-9"
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <div className="shrink-0 border border-indigo-400/20 bg-indigo-400/[0.06] p-3">
                <FileText size={24} className="text-indigo-400" />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-indigo-400">
                  Resume
                </p>

                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Want to know more about my{" "}
                  <span className="text-indigo-400">experience?</span>
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                  Download my resume to see my education, technical skills,
                  projects, certification, and current areas of focus.
                </p>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400"
            >
              Download Resume
              <Download size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}