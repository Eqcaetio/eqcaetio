import { useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";
import Logo from "/Logo_128x128.png";

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

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

        {/* Text/ Menus : Right */}
        <div className="relative h-10 w-70 text-sm">
          <div
            className={` flex inset-0 items-end justify-end gap-4 transition-all duration-300 ${
              scrolled
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Menu >sm */}
            <div className="hidden sm:block">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="#mod">Consultation</a>
                </li>
                <li>
                  <div className="relative dropdown dropdown-hover cursor-default">
                    <button tabIndex={0}>Métiers</button>

                    <div className="absolute top-full left-0 h-5 w-full" />
                    <ul
                      tabIndex={0}
                      className="absolute menu dropdown-content bg-purple-800 rounded-box w-48 shadow z-1 -left-4 mt-5"
                    >
                      <li>
                        <a href="#metiers" className="font-semibold">
                          Métiers
                        </a>
                        <ul>
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
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#about">À propos</a>
                </li>
              </ul>
            </div>

            {/* dropdown */}
            <div className="dropdown dropdown-end sm:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>

              <ul
                tabIndex="0"
                className="menu dropdown-content bg-purple-800 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="#mod">Consultation</a>
                </li>
                <li>
                  <a href="#metiers">Metiers</a>
                  <ul className="p-2 w-40 z-1">
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
                </li>
                <li>
                  <a href="#about">À propos</a>
                </li>
              </ul>
            </div>
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
