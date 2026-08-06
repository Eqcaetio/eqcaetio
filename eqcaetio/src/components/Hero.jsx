import Button from "./Button";
import Fond from "../assets/Logo_filigrane.png";
import Bg_Lines from "../assets/Bg_Lines.png";
import { scrollToSection } from "../utils/scrollToSection";

export default function Hero2() {
  return (
    <div className="relative hero bg-gradient-to-b from-purple-500 to-white pt-16">
      <img
        src={Bg_Lines}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-8 pointer-events-none"
      />

      <div className="relative bg-purple-600 max-w-2xl my-16 mx-2 sm:m-24 rounded-2xl">
        <div className="absolute inset-8 flex items-center justify-center">
          <img
            src={Fond}
            alt=""
            className="h-full w-auto object-contain opacity-10"
          />
        </div>

        <div className="hero-content text-center relative z-10 py-12">
          <div className="">
            <h1 className="text-6xl font-forum tracking-wide">Bonjour</h1>
            <div className="flex flex-col sm:py-6 text-lg gap-4 sm:mx-12">
              <div>
                <p>Indisponible jusqu'au 31 Août 2026,</p>
                <p>vous pouvez contacter ma collaboratrice</p>
                <p>pour toute consultation d'ostéopathie animale.</p>
              </div>

              <div className="text-2xl font-bold">
                <p>Sélène SCHILTZ</p>{" "}
                <h1 className="tracking-widest">07 49 95 45 38</h1>
              </div>
              <p>Merci pour votre compréhension.</p>
              <p className="italic sm:mt-6">
                (En cas d'urgences, n'hésitez pas à contacter votre vétérinaire)
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4">
              <Button onClick={() => scrollToSection("mod")}>Consultation</Button>
              <Button onClick={() => scrollToSection("metiers")}>Métiers</Button>
              <Button onClick={() => scrollToSection("about")}>À propos</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
