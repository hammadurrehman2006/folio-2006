import Hero from "../components/ui/Hero"
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
export default function Home() {
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
