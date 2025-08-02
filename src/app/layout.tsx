
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import NavBarComponents from "@/components/NavBar/NavBarComponents";
import { Suspense } from "react";
import { LoadingComponents } from "@/components/loading/LoadingComponent";
import Footer from "@/components/Footers/Footer";
import { NotistackComponents } from "@/components/notifications/notistack/NotistackComponents";
import { Theme } from "@radix-ui/themes";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={<LoadingComponents />}>
          <Theme appearance="light">
            <NotistackComponents>


              <NavBarComponents />

              <main className="flex flex-col" style={{ minHeight: 'calc(100vh - 100px)' }}>

                {children}
              </main>
              <Footer />
            </NotistackComponents>
          </Theme>
        </Suspense>
      </body>
    </html >
  );
}
