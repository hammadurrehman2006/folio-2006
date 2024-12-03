import { Inter } from "next/font/google";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
