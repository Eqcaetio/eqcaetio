import Piffonds from "../assets/Piffonds.png";
import Erables from "../assets/Cabinet_des_erables.png";
import { MapPin } from "lucide-react";
import Button from "./Button";
import Bg_Lines from "../assets/Bg_Lines.png";

export default function Modalites() {
  return (
    <div className="relative flex flex-col bg-gradient-to-t from-purple-400 via-purple-400 to-white py-4 borde-t border-purple-300">
      <img
        src={Bg_Lines}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-8 pointer-events-none"
      />
      <div className=" flex justify-center">
        <div className="flex justify-center">
          <div className="max-w-3xl mx-4">
            <h2 className="text-2xl font-bold sm:font-extrabold text-purple-900 text-center py-4">
              Modalités de consultation
            </h2>
            <div className="text-purple-900 text-center flex flex-col gap-4">
              <p>
                Les chevaux sont uniquement manipulés à domicile alors que les
                chiens, chats et NAC sont préferablement vus en cabinet afin
                d'avoir une meilleure approche de l'animal en limitant le stress
                et la territorialité.
              </p>
              <p>
                Je vous accueille sur rendez-vous à Piffonds du mardi au samedi
                et à St-Martin-du-Tertre le vendredi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4  py-12">
        {/* Piffonds */}
        <div className="card bg-purple-600 w-72 shadow-sm">
          <figure>
            <img src={Piffonds} alt="Carte" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Cabinet Ostéopathe <br /> Eqcaetio
            </h2>
            <div>
              <h3>8 les Bourassiers</h3>
              <h3>89330 Piffonds</h3>
            </div>
            <div className="card-actions justify-end">
              <Button
                href="https://www.google.com/maps/dir/?api=1&destination=48.065075818001425,3.172494861831374"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={16} />
                Navigation
              </Button>
            </div>
          </div>
        </div>
        {/* Sens */}
        <div className="card bg-purple-600 w-72 shadow-sm">
          <figure>
            <img src={Erables} alt="Carte" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Cabinet Vétérinaire <br /> Des Érables
            </h2>
            <div>
              <h3>19 Rue des Sublaines</h3>
              <h3>89100 Saint-Martin-du-Tertre</h3>
            </div>
            <div className="card-actions justify-end">
              <Button
                href="https://www.google.com/maps/dir/?api=1&destination= 48.21865835643157,3.259101949178997"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={16} />
                Navigation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
