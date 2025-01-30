import { Button } from "@/components/ui/button";
import { CopyIcon, PointerIcon } from "lucide-react";

export default function Hook({ onCopyEmail }: { onCopyEmail: () => void }) {
  return (
    <div className="px-2 py-12 w-full flex flex-col gap-3 items-center justify-center">
      <span className="text-4xl font-semibold text-center">
        Let&apos;s collaborate.
      </span>
      <span className="text-lg text-primary/60 text-center">
        Building smooth and engaging web experiences.
      </span>
      <div className="flex gap-2 pt-3 items-center justify-center md:justify-start">
        <Button className="[&_svg]:-rotate-12" id="btn-nudge">
          <PointerIcon />
          Nudge Aron!
        </Button>
        <Button
          variant="outline"
          className="bg-transparent"
          onClick={onCopyEmail}
          id="btn-copy-email"
        >
          <CopyIcon />
          Steal Aron&apos;s Email
        </Button>
      </div>
    </div>
  );
}
