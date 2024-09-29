import { Metadata } from "next";
import Hero from "@/components/landing/Hero";

export const metadata: Metadata = {
  title: "TaskMaster",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Hero />
    </div>
  );
}
