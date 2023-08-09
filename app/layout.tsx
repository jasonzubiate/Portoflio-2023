import "@/styles/globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import NavLayout from "@/components/NavLayout";

export const metadata: Metadata = {
  title: "Jason Zubiate 🤙",
  description: "Perosnal portfolio made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <NavLayout children={children}/>
      </body>
    </html>
  );
}
