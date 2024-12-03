import Hero from "../components/ui/Hero"
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
export default function Home() {
  return (
    <>
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
      </div>
    </>
  );
}
