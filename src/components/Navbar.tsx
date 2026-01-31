"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "İletişim", href: "/iletisim" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 rounded-full border border-black/5 bg-white/70 px-2 py-1.5 backdrop-blur-xl dark:border-white/10 dark:bg-black/70"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative px-4 py-1.5 text-sm font-medium transition-colors",
              pathname === item.href
                ? "text-black dark:text-white"
                : "text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
            )}
          >
            {pathname === item.href && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 z-[-1] rounded-full bg-black/5 dark:bg-white/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {item.name}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}
