"use client";

import { useToast } from "@/hooks/use-toast";
import Header from "./lib/header";
import Profile from "./lib/profile";
import Hook from "./lib/hook";
import SocialMedia from "./lib/social-media";
import Footer from "./lib/footer";
import Projects from "./lib/projects";
import WrapperSection from "./lib/wrapper-section";
import { useState } from "react";
import InfiniteHorizontal from "./lib/infinite-horizontal";

export default function HomeContainer() {
  const { toast } = useToast();

  const [activeSection, setActiveSection] = useState<{
    title: string;
    sectionId: string;
  }>({
    title: "Meet Aron: The Magician 🎩",
    sectionId: `#section_profile`,
  });

  const onCopyEmail = async () => {
    await navigator.clipboard.writeText("aaheldian@gmail.com");
    toast({
      title: `✨ Email teleported! ✨`,
      description:
        "Your magic clipboard now holds my email. Paste it anywhere and let's connect!",
      duration: 3000,
    });
  };

  return (
    <div className="gap-4 flex flex-col w-full max-w-2xl mx-auto p-4">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="p-2 bg-secondary/50 rounded-2xl flex flex-col border gap-2 shadow-lg">
        <WrapperSection
          setData={(data) => {
            setActiveSection({
              title: "Meet Aron: The Magician 🎩",
              sectionId: data,
            });
          }}
          data="section_profile"
        >
          <Profile onCopyEmail={onCopyEmail} />
        </WrapperSection>
        <WrapperSection
          setData={(data) => {
            setActiveSection({
              title: "Step Into Aron's Creative Universe 🚀",
              sectionId: data,
            });
          }}
          data="section_projects"
        >
          <Projects />
        </WrapperSection>
        {/* <div className="p-6 bg-secondary/80 rounded-xl flex flex-col border gap-3 w-full">
          <span className="text-lg text-primary/60 font-medium">
            <span className="text-lg text-primary/40 font-medium">
              {"\u2022"}&nbsp;&nbsp;
            </span>
            Amazing Ventures
          </span>
        </div> */}
        <InfiniteHorizontal />
        <Hook onCopyEmail={onCopyEmail} />
        <SocialMedia />
        <Footer />
      </div>
    </div>
  );
}
