import { scrollToSection } from "../utils/scrollToSection";
import Logo from "/Logo_128x128.png";

export default function Navbar({ scrolled }) {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 navbar bg-purple-800 text-white shadow-xl px-4 sm:px-12 rounded-b-xl w-[98%] border-b">
      <div className="flex items-end justify-around w-full">
        {/* LOGO: Left */}
        <div className="flex-1">
          <div className="flex items-end">
            <img
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("top");
              }}
              src={Logo}
              alt="Logo"
              className="w-10 cursor-pointer"
            />
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("top");
              }}
              className="text-xl cursor-pointer"
            >
              qcaetio
            </a>
          </div>
        </div>

        <div className="relative h-10 w-70 text-sm">
          {/* Menu >sm */}
          <div
            className={` lg:flexabsolute inset-0 flex items-end justify-end gap-4 transition-all duration-300 ${
              scrolled
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ul className="menu menu-horizontal px-1">
              <li>
                <a
                  href="#mod"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("mod");
                  }}
                  className="hover:text-purple-300 cursor-pointer"
                >
                  Consultation
                </a>
              </li>
              <li>
                <details>
                  <summary>
                    <a
                      href="#metiers"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("metiers");
                      }}
                      className="hover:text-purple-300"
                    >
                      Metiers
                    </a>
                  </summary>
                  <ul className="p-2 bg-purple-800 w-40 z-1">
                    <li>
                      <a href="#way">Parcours de santé</a>
                    </li>
                    <li>
                      <a href="#definition">Définition Ostéopathie</a>
                    </li>
                    <li>
                      <a href="#pratique">Ma pratique</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                  className="hover:text-purple-300"
                >
                  À propos
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`absolute inset-0 flex flex-col justify-end text-right  transition-all duration-300 ${
              scrolled
                ? "opacity-0 opacity-0 pointer-events-none"
                : "opacity-100 opacity-0 pointer-events-auto"
            }`}
          >
            <p>Marilyne JOBERT</p>
            <p>Ostéopathe animalier</p>
          </div>
        </div>
      </div>
    </div>
  );
}
