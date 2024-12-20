
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "M Hammad ur Rehman's Personal Portfolio.",
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images: "./public/logo.png",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
    <html lang="en" >
      <body className={`${inter.className}`}>
          {children}
        
      </body>
    </html>
    </>
  );
}
