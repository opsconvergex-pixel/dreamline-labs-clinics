"use client";

import { useEffect } from "react";

/** Mobile sticky button: visible once the hero button has scrolled away, hidden again at the booking section. */
export default function StickyCta({ href, label }: { href: string; label: string }) {
  useEffect(() => {
    const hero = document.getElementById("hero-cta");
    const book = document.getElementById("book");
    let heroIn = false;
    let bookIn = false;
    const sync = () => document.body.classList.toggle("cta-on", !heroIn && !bookIn);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) heroIn = e.isIntersecting;
        if (e.target === book) bookIn = e.isIntersecting;
      }
      sync();
    });
    if (hero) io.observe(hero);
    if (book) io.observe(book);
    return () => {
      io.disconnect();
      document.body.classList.remove("cta-on");
    };
  }, []);

  return (
    <a href={href} className="cl-sticky">
      {label}
    </a>
  );
}
