import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Hello from "./hello";
import { Button } from "@/components/ui/button";
import {
  AppWindowMacIcon,
  BriefcaseBusinessIcon,
  CircleUserRoundIcon,
} from "lucide-react";

const navItems = [
  {
    id: "btn-profile",
    icon: CircleUserRoundIcon,
    tooltip: "Meet Aron: The Magician 🎩",
  },
  {
    id: "btn-projects",
    icon: AppWindowMacIcon,
    tooltip: "Step Into Aron's Creative Universe 🚀",
  },
  {
    id: "btn-business",
    icon: BriefcaseBusinessIcon,
    tooltip: "Discover how Mr. Aron blends business with innovation 💡",
  },
];

export default function Header() {
  return (
    <div className="p-4 bg-secondary/50 rounded-2xl flex items-center justify-between border gap-3 shadow-lg w-full sticky top-4 z-50">
      <div className="w-max">
        <Hello />
      </div>
      <div className="flex flex-row gap-2 justify-center items-start">
        {navItems.map(({ id, icon: Icon, tooltip }) => (
          <TooltipProvider key={id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="[&_svg]:size-6"
                  id={id}
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
