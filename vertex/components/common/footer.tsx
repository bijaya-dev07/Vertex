"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<string>("2026");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-[#2d5a3d]/60 bg-[#0a1f14] py-12 text-slate-50">
      <div
        className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#2d5a3d 1px, transparent 1px), linear-gradient(90deg, #2d5a3d 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="wrapper relative z-10 text-center text-sm text-[#a3b899]">
        &copy; {year} Vertex. All rights reserved.
      </div>
    </footer>
  );
}
