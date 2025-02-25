"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CopyIcon, PointerIcon } from "lucide-react";
import Image from "next/image";

export default function Profile({ onCopyEmail }: { onCopyEmail: () => void }) {
  return (
    <div className="p-4 md:p-6 w-full flex flex-col gap-6 md:gap-10">
      <div className="flex justify-between items-center gap-3 flex-wrap">
        <span className="text-xl text-primary/60 font-medium whitespace-nowrap">
          <span className="text-xl text-primary/40 font-medium">
            {"\u2022"}&nbsp;&nbsp;
          </span>
          Web Developer
        </span>
        <Badge className="text-sm whitespace-nowrap border-green-600 bg-transparent text-green-600 shadow hover:bg-transparent hidden md:inline-flex">
          <div className="relative h-2 aspect-square">
            <div className="absolute h-full w-full bg-green-600 animate-ping rounded-full" />
            <div className="absolute h-full w-full bg-green-600 rounded-full" />
          </div>
          &nbsp; Open To Work
        </Badge>
      </div>
      <div className="flex justify-center items-center gap-6 md:gap-10 flex-col-reverse md:flex-row ">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-3xl">
            It&apos;s <span className="font-bold">Aarron Heldian</span>
          </span>
          <span className="text-md text-primary/60">
            A creative website developer from Jakarta, Indonesia. Currently
            building digital experiences at&nbsp;
            <span className="font-semibold whitespace-nowrap">
              Telkom Indonesia
            </span>
            .
          </span>
          <div className="flex gap-2 pt-4 items-center justify-center md:justify-start">
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
        <div className="relative">
          <div className="absolute h-5 aspect-square bg-green-600 animate-ping rounded-full inline-flex md:hidden top-4 right-4" />
          <div className="absolute h-5 aspect-square bg-green-600 rounded-full inline-flex md:hidden top-4 right-4" />
          <div className="min-h-40 min-w-40 h-40 w-40 bg-secondary/80 rounded-full p-2 border overflow-hidden flex justify-center items-center">
            <Image
              src="https://storeio.cloud.playcourt.id/ewz-mycarrier-pub-dev/public/img/profile-picture.png"
              alt="Mr. Aron"
              unoptimized
              className="h-full w-full rounded-full"
              width={160}
              height={160}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
