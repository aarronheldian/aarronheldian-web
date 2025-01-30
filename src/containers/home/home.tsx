"use client";

import { useToast } from "@/hooks/use-toast";
import Header from "./lib/header";
import Profile from "./lib/profile";
import Hook from "./lib/hook";
import SocialMedia from "./lib/social-media";
import Footer from "./lib/footer";
import Projects from "./lib/projects";

export default function HomeContainer() {
  const { toast } = useToast();

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
      <Header />
      <div className="p-2 bg-secondary/50 rounded-2xl flex flex-col border gap-2 shadow-lg">
        <Profile onCopyEmail={onCopyEmail} />
        <Projects />
        {/* <div className="p-6 bg-secondary/80 rounded-xl flex flex-col border gap-3 w-full">
          <span className="text-lg text-primary/60 font-medium">
            <span className="text-lg text-primary/40 font-medium">
              {"\u2022"}&nbsp;&nbsp;
            </span>
            Amazing Ventures
          </span>
        </div> */}
        <Hook onCopyEmail={onCopyEmail} />
        <SocialMedia />
        <Footer />
      </div>
    </div>
  );
}
