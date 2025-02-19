"use client";

import { useEffect, useState } from "react";

export default function Hello() {
  const languages = [
    "Hello",
    "Halo",
    "Bonjour",
    "Hola",
    "Hallo",
    "Ciao",
    "Sugeng",
  ];

  const [currentLanguage, setCurrentLanguage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages?.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [languages?.length]);

  return (
    <h1 className="text-3xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary pr-5 text-primary font-bold font-courier">
      {languages?.[currentLanguage] || "Hello"}
    </h1>
  );
}
