import NextAuthProvider from "@/providers/NextAuthProvider";
import { Toaster } from "react-hot-toast";

import Layout from "@/components/layouts/Layout";
import TanstakQueryProvider from "@/providers/TanstakQueryProvider";
import ConnectionLostProvider from "@/providers/ConnectionLostProvider";
import yekanBakhFont from "@/utils/fonts";

import "./globals.css";

export const metadata = {
  title: "املاک | Next.js Fullstack",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekanBakhFont.className}>
        <TanstakQueryProvider>
          <NextAuthProvider>
            <Layout>{children}</Layout>
          </NextAuthProvider>
        </TanstakQueryProvider>
        <ConnectionLostProvider />
        <Toaster />
      </body>
    </html>
  );
}
