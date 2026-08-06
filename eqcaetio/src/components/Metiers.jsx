import { useRef } from "react";
import { Quote } from "lucide-react";
import Parcours_V from "../assets/Parcours_V.png";
import Parcours_H from "../assets/Parcours_H.png";

export default function Metiers() {
  const dialogRef = useRef(null);
  return (
    <div className="flex justify-center bg-purple-200 border-t border-purple-300 py-12">
      <div className="flex justify-center  w-full ">
        <div className="max-w-3xl">
          <div className="text-purple-900 text-center flex flex-col gap-4 mx-4">
            <h2 className="text-2xl font-bold pt-4">Métiers</h2>
            {/* Parcours de santé */}
            <h3 id="way" className="scroll-mt-18 text-lg font-bold">
              Parcours de santé
            </h3>
            <div>
              <p>Vous faites beaucoup pour votre animal, merci pour lui.</p>
              <p>
                Ici, nous allons voir comment optimiser la coordination entre
                les différents professionnels qui s’occupent de lui.
              </p>
            </div>

            <div className="card sm:card-side">
              <figure className="p-1">
                <img
                  src={Parcours_V}
                  alt="Album"
                  className="hidden sm:block"
                  onClick={() => dialogRef.current?.showModal()}
                />
                <dialog ref={dialogRef} className="modal bg-black/80">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="modal-box max-w-fit max-h-screen p-2 bg-purple-100 shadow-none">
                    <img
                      src={Parcours_V}
                      alt="Parcours_V"
                      className="max-h-[90vh] w-auto object-contain"
                    />
                  </div>

                  <form method="dialog" className="modal-backdrop ">
                    <button className="cursor-default">close</button>
                  </form>
                </dialog>

                <img
                  src={Parcours_H}
                  alt="Album"
                  className="sm:hidden w-96"
                />
              </figure>

              <div className="flex flex-col gap-4 mx-4">
                <div>
                  <p className="font-bold">Les pieds</p>
                  <p>
                    Pour les animaux à sabots, le suivi est réalisé 6 à 12 fois
                    par an en fonction du type de pratique. Pour les animaux à
                    pelotes plantaires (chiens et les chats) le soin des pieds
                    incluent surtout la vérification des griffes et la propreté
                    des coussinets.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Les dents</p>
                  <p>
                    Un contrôle dentaire est généralement consulté une à deux
                    fois par an en fonction de l'age et des éventuels problèmes.
                    Il est conseillé de planifier cette intervention{" "}
                    <strong>avant</strong> la séance d’ostéopathie car les
                    troubles dentaires peuvent influencer le résultat des tests.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Le shiatsu</p>
                  <p>
                    Le shiatsu et l’ostéopathie sont complémentaires. Leur ordre
                    d’application dépend avant tout de l’animal et de vos
                    observations. Vos thérapeutes pourront aussi vous guider
                    pour choisir la meilleure approche au cas par cas.
                  </p>
                  <p>
                    Ces séances demandent du temps et de l’énergie à l’animal
                    pour assimiler les effets. Il est donc essentiel de laisser
                    un intervalle de 2 à 3 semaines entre chaque pratique.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Le massage</p>
                  <p>
                    Privilégiez un massage <strong>après</strong> la séance
                    d’ostéopathie, sauf si le suivi est très régulier.
                  </p>
                </div>
              </div>
            </div>
            {/* Definition */}
            <h2 id="definition" className="scroll-mt-16 text-lg font-bold pt-4">
              Définition de l’ostéopathie animale
            </h2>
            <div className="-mt-4 -mb-6">
              <Quote className="rotate-180" />
            </div>
            <p className="italic ">
              On entend par <strong>"acte d'ostéopathie animale"</strong> les
              manipulations ayant pour seul but de prévenir ou de traiter des
              troubles fonctionnels du corps de l'animal, à l'exclusion des
              pathologies organiques qui nécessitent une intervention
              thérapeutique, médicale, chirurgicale, médicamenteuse ou par
              agents physiques. Ces manipulations sont musculo-squelettiques et
              myo-fasciales, exclusivement manuelles et externes.
            </p>
            <p>
              Pour la prise en charge de ces troubles fonctionnels, les
              personnes réalisant des actes d'ostéopathie animale effectuent des
              actes de manipulations et mobilisations non instrumentales,
              directes et indirectes, non forcées.
            </p>

            <div className="flex justify-end -my-4">
              <Quote />
            </div>
            <p className="text-right">
              Registre national d'aptitude article L.243-3 du CRPM
            </p>
            <h3 id="pratique" className="scroll-mt-16 text-lg font-bold mt-8">
              Ma pratique
            </h3>
            <p>
              Je regroupe toutes les informations disponibles pour votre animal : vos observations, sa façon de se déplacer, j'effectue des tests de mobilité des différentes structures… J’établis un schéma fonctionnel duquel ressortent les interventions à réaliser pour l’aider au mieux. Ces interventions sont uniquement manuelles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
