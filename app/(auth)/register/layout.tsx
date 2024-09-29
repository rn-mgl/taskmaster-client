import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register | TaskMaster",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
