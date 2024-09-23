import type { Metadata } from "next";
// import localFont from "next/font/local";
import "@/styles/globals.css";
import Container from "@/components/ui/container";
import Header from "@/components/ui/header/header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/ui/footer/footer";
// import { Sora } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const sora = Sora({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   fallback: ["sans-serif"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Matin Khani",
  description: "Generated by create next app",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Container>
          <Header />
          <div className="px-4 py-10 md:px-20 md:py-[60px]">{children}</div>
        </Container>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
