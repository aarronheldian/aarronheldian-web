"use client";

import useResponsive from "@/hooks/use-responsive";
import React, { FC, useEffect, useRef } from "react";

interface WrapperSectionProps {
  children: React.ReactNode;
  setData: (data: string) => void;
  data: string;
}

const WrapperSection: FC<WrapperSectionProps> = ({
  children,
  setData,
  data,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isMobile = useResponsive("sm");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setData(data);
          }
        });
      },
      {
        threshold: isMobile ? 0.4 : 0.9,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [data]);

  return (
    <div ref={ref} id={data}>
      {children}
    </div>
  );
};

export default WrapperSection;
