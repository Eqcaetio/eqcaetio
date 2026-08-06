import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modalites from "./components/Modalites";
import BackToTop from "./components/BackToTop";
import A_propos from "./components/A_propos";
import Metiers from "./components/Metiers";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-purple-500">
      <div id="top"><Navbar scrolled={scrolled} /></div>
      <div id="hero" className="scroll-mt-16"><Hero /></div>
      <div id="mod" className="scroll-mt-16"><Modalites /></div>
      <div id="metiers"><Metiers /></div>
      <div id="about" className="-scroll-mt-6"><A_propos /></div>
      <div> <Footer /></div>
      <div><BackToTop visible={scrolled} /></div>
    </div>
  );
}
