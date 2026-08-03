import { Phone, Mail, BookText } from "lucide-react";
import Baniere from "../assets/Baniere.png";
import Button from "./Button";

export default function A_propos() {
  return (
    <div className="flex flex-col justify-center items-center bg-purple-200 pb-6">
      <img src={Baniere} alt="" className="w-80 h-8 opacity-20 my-12" />
      <div className="flex justify-center">
        {/* titre */}
        <div className="max-w-3xl mx-4">
          <h2 className="text-2xl font-bold sm:font-extrabold text-purple-900 text-center py-4">
            À propos
          </h2>

          {/* Card */}
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album"
              />
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

              <p className="pl-10">
                <lu>
                  <li>Dilpomée d'Ostéopathie animal en 2012</li>
                  <li>Pratitienne de puis plus de 14 ans</li>
                  <li>Formation ... en ...</li>
                  <li>Formation ... en ...</li>
                  <li>Formation ... en ...</li>
                  <li>Formation ... en ...</li>
                </lu>
              </p>
              <div className="card-actions justify-end">
                <Button>Lien</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
