
import Link from "next/link";
import { GiftIcon, LinkIcon, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="section-container py-7">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <Link
            href="#home"
            className="text-sm font-semibold tracking-tight text-white"
          >
            Shivanshu<span className="text-indigo-400">.</span>
          </Link>

          <p className="text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} Shivanshu Tiwari
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shivanshu6264"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors duration-200 hover:text-white"
            >
              <GiftIcon size={18} />
            </a>

            <a
              href="https://linkedin.com/in/shivanshu6264"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors duration-200 hover:text-white"
            >
              <LinkIcon size={18} />
            </a>

            <Link
              href="#home"
              aria-label="Back to top"
              className="border-l border-white/10 pl-4 text-zinc-500 transition-colors duration-200 hover:text-white"
            >
              <ArrowUp size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

