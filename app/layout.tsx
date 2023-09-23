import "@/styles/globals.css";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';

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
        <NavLayout>
          {children}
          <Analytics/>
        </NavLayout>
      </body>
    </html>
  );
}
