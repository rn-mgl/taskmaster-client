import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskMaster | Task",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
