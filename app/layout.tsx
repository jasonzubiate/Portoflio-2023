import "@/styles/globals.css";
import { constructMetaData } from "@/utils/metadata";
import { Analytics } from '@vercel/analytics/react';

import NavLayout from "@/components/NavLayout";

export const metadata = constructMetaData()

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
