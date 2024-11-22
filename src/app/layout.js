import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import DomainChecker from "@/components/DomainChecker";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ravi Barot Portfolio",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
