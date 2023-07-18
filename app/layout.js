import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube Clone",
  description: "Clone of youtube website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#14161a", color: "white" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
