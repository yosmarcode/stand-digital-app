
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import NavBarComponents from "@/components/NavBar/NavBarComponents";
import { AccountComponents } from "@/components/notifications/account/AccountComponents";
import { Suspense } from "react";
import { LoadingComponents } from "@/components/loading/LoadingComponent";
import Footer from "@/components/Footers/Footer";
import { NotistackComponents } from "@/components/notifications/notistack/NotistackComponents";
import userStore from "@/guards/userstore";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stand Digital",
  description: "Stand Digital sistema que permite registrar tu negocio en la plataforma digital, para que puedas vender tus productos y servicios en línea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<LoadingComponents />}>
          <NotistackComponents>
            {userStore && (<AccountComponents />)}
            <NavBarComponents />

            <main className="flex flex-col">
              {children}
            </main>
            <Footer />
          </NotistackComponents>
        </Suspense>
      </body>
    </html >
  );
}
