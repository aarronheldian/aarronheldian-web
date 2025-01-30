import HomeContainer from "@/containers/home/home";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aarron Heldian | Developer & Dreamer",
    description:
      "Welcome to Aarron Heldian's corner of creativity! Explore projects, ideas, and passion for crafting elegant code and innovative solutions.",
  };
}

export default function HomePage() {
  return <HomeContainer />;
}
