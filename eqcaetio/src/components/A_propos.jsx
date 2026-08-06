import {
  Phone,
  Mail,
  BookText,
  IdCardLanyard,
  SquareArrowUpRight,
} from "lucide-react";
import Baniere from "../assets/Baniere.png";
import Marilyne from "../assets/Marilyne.png";
import Button from "./Button";

export default function A_propos() {
  return (
    <div className="flex flex-col justify-center items-center bg-purple-200 pb-6">
      {/* Banière */}
      <img src={Baniere} alt="" className="w-80 h-8 opacity-20 mb-12" />

      <div className="flex justify-center">
        {/* Titre */}
        <div className="max-w-3xl mx-4">
          <h2 className="text-2xl font-bold sm:font-extrabold text-purple-900 text-center py-4">
            À propos
          </h2>

          {/* Card */}
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure className="p-1">
              <img src={Marilyne} alt="Album" className="rounded"/>
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold">Marilyne JOBERT</h2>
              <div className="flex items-end gap-2">
                <Phone size={18} />
                <h2 className="-mt-4">06 60 53 14 55</h2>
              </div>
              <div className="flex items-end gap-2">
                <Mail size={18} />
                <h2 className="-mt-4">eqcaetio@gmail.com</h2>
              </div>
              <div className="flex items-end gap-2">
                <BookText size={18} />
                <h2 className="-mt-4">RCS Sens 25541295331752225</h2>
              </div>
              <div className="flex items-end gap-2">
                <IdCardLanyard size={18} />
                <h2 className="-mt-4">Numero Ordinal - OA100</h2>
              </div>
              <div className="pl-4 p-4 sm:p-10">
                <lu>
                  <li>Dilpomée d'Ostéopathie animal en 2012</li>
                  <li>Pratitienne depuis plus de 14 ans</li>
                  <li>Principalement chevaux, chiens, chats, Nac.</li>
                  <li>À domicile et en cabinets</li>
                </lu>
              </div>
              <div className="card-actions justify-center">
              <Button
                href="https://www.lacagnole.fr/spip.php?article642"
                target="_blank"
                rel="noopener noreferrer"

              >
                Article lacagnole
                <SquareArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
