import Hero from "../components/ui/Hero"
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
// import { renderCanvas } from './components/Render';
// import { useEffect } from "react";
export default function Home() {
  // useEffect(() => {
  //   renderCanvas();
  // }, []);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
