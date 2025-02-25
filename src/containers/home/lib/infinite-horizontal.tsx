"use client";

import { useEffect, useRef } from "react";

export default function InfiniteHorizontal() {
  const logosRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;

      // Prevent multiple clones
      if (!ul.parentElement?.querySelector("[aria-hidden='true']")) {
        const clonedUl = ul.cloneNode(true) as HTMLUListElement;
        clonedUl.setAttribute("aria-hidden", "true");
        ul.parentNode?.appendChild(clonedUl);
      }
    }
  }, []);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden pt-12 relative"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
      }}
    >
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start animate-infinite-scroll whitespace-nowrap gap-8"
      >
        {[
          "JavaScript",
          "TypeScript",
          "React JS",
          "Next JS",
          "Tailwind CSS",
          "Node JS",
          "Express JS",
          "MongoDB",
          "PostgreSQL",
          "GraphQL",
          "Docker",
          "CI/CD",
          "GIT",
        ].map((tech, index) => (
          <li key={index} className="px-4">
            <span className="whitespace-nowrap">{tech}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
