import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import TransitionProvider from "@/components/transition/TransitionProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased `}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
