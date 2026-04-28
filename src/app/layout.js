import { Outfit } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "PixGen",
  description: "An Ai engine to generate on requests",
};

const outfitFont = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${outfitFont.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
