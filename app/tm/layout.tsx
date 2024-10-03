import Nav from "@/components/global/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskMaster",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Nav>{children}</Nav>
    </div>
  );
}
