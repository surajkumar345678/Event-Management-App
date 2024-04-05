import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Management App",
  description:
    "A website that shows upcoming and recommended events. This website is responsive to work in both desktop and mobile screen size. It fetches events from the APIs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
