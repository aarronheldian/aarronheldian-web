"use client";

import { useEffect, useRef } from "react";
import {
  GitIcon,
  JavaScriptIcon,
  NextJSIcon,
  NodeIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "@/components/svg";

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
        className="flex items-center justify-center md:justify-start animate-infinite-scroll whitespace-nowrap"
      >
        {[
          <JavaScriptIcon key={1} className="h-8 w-auto text-primary" />,
          <TypeScriptIcon key={2} className="h-8 w-auto text-primary" />,
          <ReactIcon key={3} className="h-8 w-auto text-primary" />,
          <NextJSIcon key={4} className="h-6 w-auto text-primary" />,
          <TailwindIcon key={5} className="h-6 w-auto text-primary" />,
          <GitIcon key={6} className="h-6 w-auto text-primary" />,
          <NodeIcon key={7} className="h-6 w-auto text-primary" />,
          // "Node JS",
          // "Express JS",
          // "MongoDB",
          // "PostgreSQL",
          // "GraphQL",
          // "Docker",
          // "CI/CD",
          // "GIT",
        ].map((tech, index) => (
          <li key={index} className="px-4 whitespace-nowrap">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
