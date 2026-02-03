import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preetam Pujari — GenAI Engineer",
  description: "your avg daily genai enthusiast who ships RAG systems, agents & LLM apps. Final-year B.Tech CSE (AI/ML) student with hands-on experience in RAG systems, LLM applications, and AI agents.",
  keywords: ["GenAI", "RAG", "LLM", "AI Engineer", "Machine Learning", "Preetam Pujari", "AI Agents", "LangChain"],
  authors: [{ name: "Preetam Pujari" }],
  openGraph: {
    title: "Preetam Pujari — GenAI Engineer",
    description: "your avg daily genai enthusiast who ships RAG systems, agents & LLM apps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preetam Pujari — GenAI Engineer",
    description: "your avg daily genai enthusiast who ships RAG systems, agents & LLM apps",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
