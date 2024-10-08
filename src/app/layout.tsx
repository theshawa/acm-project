import type { Metadata } from "next";
import { Anton, Antonio, Roboto_Condensed } from "next/font/google";
import { SmoothScrolling } from "./components/smooth-scrolling";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});
const antonio = Antonio({
  variable: "--font-antonio",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project for ACM UCSC",
  description: "Developed by Theshawa Dasun from ACM UCSC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[
        robotoCondensed.variable,
        anton.variable,
        antonio.variable,
      ].join(" ")}
    >
      <body>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
