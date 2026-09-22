
"use client";

import {
  GitBranch,
  LinkIcon,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    name: "Email",
    value: "tiwarishivansh2003@gmail.com",
    href: "mailto:tiwarishivansh2003@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/shivanshu6264",
    href: "https://linkedin.com/in/shivanshu6264",
    icon: LinkIcon,
    external: true,
  },
  {
    name: "GitHub",
    value: "github.com/shivanshu6264",
    href: "https://github.com/shivanshu6264",
    icon: GitBranch,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#050505]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's{" "}
            <span className="text-indigo-400">connect.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            I'm open to discussing software development, AI / GenAI
            opportunities, projects, and interesting technical ideas.
          </p>
        </motion.div>

        <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={
                  link.external
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-indigo-400/30"
              >
                <div className="flex items-center justify-between">
                  <div className="border border-indigo-400/20 bg-indigo-400/[0.06] p-2.5">
                    <Icon size={20} className="text-indigo-400" />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-zinc-600 transition-colors duration-200 group-hover:text-indigo-400"
                  />
                </div>

                <h3 className="mt-6 font-semibold text-white">
                  {link.name}
                </h3>

                <p className="mt-1 break-all text-sm text-zinc-500">
                  {link.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

