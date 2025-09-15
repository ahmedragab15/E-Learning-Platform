import type { Metadata } from "next";
import { Inter, Manrope, Alike_Angular } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import { getUserFromToken } from "@/lib/JWT";
import StoreProvider from "./StoreProvider";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const alike = Alike_Angular({
  variable: "--font-alike",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Academy | Learn from the Best Instructors",
  description: "Discover high-quality online courses across various categories. Learn at your own pace from industry-leading instructors.",
  keywords: ["online courses", "e-learning", "best instructors", "learn online", "programming courses", "design courses", "Ahmed Academy"],
  openGraph: {
    title: "Ahmed Academy | Online Learning Made Easy",
    description: "Join thousands of learners and access top-rated online courses from expert instructors.",
    url: "https://Ahmed Academy.com",
    siteName: "Ahmed Academy",
    images: [
      {
        url: "https://Ahmed Academy.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Academy | Learn Anything, Anytime",
    description: "Access high-quality courses with expert instructors and flexible learning.",
    images: ["https://Ahmed Academy.com/og-image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserFromToken();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${alike.variable} ${manrope.variable}  antialiased`}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Header user={user} />
            <main>{children}</main>
            <Footer />
            <ToastContainer position="bottom-left" autoClose={1000} />
            <ScrollToTop />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
