import Map_Piffonds from "../assets/Map_Piffonds.png";
import Erables from "../assets/Cabinet_des_erables.png";
import Button from "./Button";

export default function Cabinets() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-purple-200 py-12">
      {/* Piffonds */}
      <div className="card bg-base-100 w-72 shadow-sm">
        <figure>
          <img src={Map_Piffonds} alt="Carte" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Cabinet Ostéopathe <br /> Eqcaetio
          </h2>
          <div>
            <p>8 les Bourassiers</p>
            <p>89330 Piffonds</p>
          </div>
          <div className="card-actions justify-end">
            <Button
              href="https://www.google.com/maps/dir/?api=1&destination=48.065075818001425,3.172494861831374"
              variant="secondary"
            >
              Navigation
            </Button>
          </div>
        </div>
      </div>

      {/* Sens */}
      <div className="card bg-base-100 w-72 shadow-sm">
        <figure>
          <img src={Erables} alt="Carte" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Cabinet Vétérinaire <br /> Des Érables
          </h2>
          <div>
            <p>19 Rue des Sublaines</p>
            <p>89100 Saint-Martin-du-Tertre</p>
          </div>
          <div className="card-actions justify-end">
            <Button
              href="https://www.google.com/maps/dir/?api=1&destination= 48.21865835643157,3.259101949178997"
              variant="secondary"
            >
              Navigation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
