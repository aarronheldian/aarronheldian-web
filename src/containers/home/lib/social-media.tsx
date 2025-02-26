"use client";

import { InstagramIcon, LinkedinIcon, XIcon } from "@/components/svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="p-4 md:p-6 bg-secondary/80 rounded-xl flex justify-between md:items-center border gap-3 w-full flex-col md:flex-row">
      <span className="text-lg text-primary/60 font-medium whitespace-nowrap">
        <span className="text-lg text-primary/40 font-medium">
          {"\u2022"}&nbsp;&nbsp;
        </span>
        Let&apos;s Make a New Spells
      </span>

      <div className="flex flex-row gap-2 justify-center items-start">
        <Button
          size="icon"
          variant="ghost"
          className="[&_svg]:size-6"
          id="btn-linkedin"
          asChild
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aarronheldian/"
          >
            <LinkedinIcon className="h-6 w-auto text-primary" />
          </Link>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="[&_svg]:size-6"
          id="btn-instagram"
          asChild
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/aheldian/"
          >
            <InstagramIcon className="h-6 w-auto text-primary" />
          </Link>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="[&_svg]:size-6"
          id="btn-twitter"
          asChild
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/AarronHeldian/"
          >
            <XIcon className="h-6 w-auto text-primary" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
