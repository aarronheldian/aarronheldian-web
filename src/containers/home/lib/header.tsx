"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// import Hello from "./hello";
import { Button } from "@/components/ui/button";
import {
  AppWindowMacIcon,
  // BriefcaseBusinessIcon,
  CircleUserRoundIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactTyped } from "react-typed";

const navItems = [
  {
    id: "btn-profile",
    sectionId: "section_profile",
    icon: CircleUserRoundIcon,
    tooltip: "Meet Aron: The Magician 🎩",
  },
  {
    id: "btn-projects",
    icon: AppWindowMacIcon,
    sectionId: "section_projects",
    tooltip: "Step Into Aron's Creative Universe 🚀",
  },
  // {
  //   id: "btn-business",
  //   icon: BriefcaseBusinessIcon,
  //   sectionId: "section-business",
  //   tooltip: "Discover how Mr. Aron blends business with innovation 💡",
  // },
];

interface HeaderProps {
  activeSection: { title: string; sectionId: string };
  setActiveSection: (data: { title: string; sectionId: string }) => void;
}

export default function Header({ activeSection }: HeaderProps) {
  return (
    <div className="p-4 bg-secondary/50 rounded-2xl flex items-center justify-between border gap-3 shadow-lg w-full sticky top-4 z-50">
      <div className="w-max">
        <ReactTyped
          strings={[
            "Hello",
            "Halo",
            "Bonjour",
            "Hola",
            "Hallo",
            "Ciao",
            "Sugeng",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
          className="text-3xl whitespace-nowrap text-primary font-bold font-courier"
        />
      </div>
      <div className="flex flex-row gap-2 justify-center items-start">
        {navItems.map(({ id, icon: Icon, tooltip, sectionId }) => (
          <TooltipProvider key={id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className={cn(
                    "[&_svg]:size-6",
                    activeSection?.sectionId !== sectionId && "text-primary/80"
                  )}
                  id={id}
                  onClick={() => {
                    const scrollTop = Math.max(
                      (document.getElementById(sectionId)?.offsetTop || 0) -
                        112,
                      0
                    );

                    if (typeof window !== "undefined") {
                      window?.scrollTo({
                        behavior: "smooth",
                        top: scrollTop,
                      });
                    }
                  }}
                >
                  <Icon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{tooltip}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
