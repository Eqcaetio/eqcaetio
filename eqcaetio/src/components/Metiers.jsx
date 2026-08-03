import { Quote } from "lucide-react";

export default function Metiers() {
  return (
    <div className="flex justify-center bg-purple-200 border-t border-purple-300 py-6">
      <div className="flex justify-center  w-full ">
        <div className="max-w-3xl mx-4">
          <div className="text-purple-900 text-center flex flex-col gap-4">
            <h2 className="text-2xl font-bold sm:font-extrabold text-purple-900 text-center pt-4">
              Métiers
            </h2>
            {/* Parcours de santé */}
            <h3
              id="way"
              className="text-lg font-bold sm:font-extrabold text-purple-900 text-center"
            >
              Parcours de santé
            </h3>
            <p>
              Vous faites beaucoup pour votre animal et c’est merveilleux. Mais
              comment tirer le maximum de synergie des différents intervenants
              que vous sollicitez ? Pour les chevaux, les pieds sont suivis
              fréquemment, il n’y a donc pas vraiment d’avant / après les soins
              des pieds. Le technicien dentaire, lui, c’est 1 fois par an en
              général. Faites le passer avant votre ostéo préféré. Les troubles
              dentaires peuvent influencer les tests ostéopathiques. Et votre
              cheval peut se bloquer facilement la mâchoire sur le pas d’âne.
              Pour tous, faites masser votre animal plutôt après la séance
              d’ostéopathie. En cas de suivi fréquent, peu importe l’ordre de
              passage. Pour le shiatsu, ça dépend. Dans certains cas, il sera
              plus pertinent de commencer par le shiatsu ; dans d’autres cas,
              c’est l’ostéopathie qui sera plus appropriée. Seules l’expérience
              et la connaissance de votre animal à chaque fois pourra vous
              guider (vous pouvez aussi demander leur avis à vos praticiens pour
              réfléchir ensemble à la meilleure option). Ces interventions
              demandent de l’énergie au patient pour les intégrer. Aussi, il est
              important de ne pas trop rapprocher les séances. Si vous commencez
              par l’ostéopathie, attendez idéalement 2 semaines avant le passage
              de votre praticien en shiatsu. Si vous commencez par le shiatsu,
              attendez idéalement 3 semaines avant le passage de votre praticien
              en ostéopathie.
            </p>

            {/* Definition */}
            <h2
              id="definition"
              className="text-lg font-bold sm:font-extrabold text-purple-900 text-center pt-4"
            >
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
              <p>
                Pour la prise en charge de ces troubles fonctionnels, les
                personnes réalisant des actes d'ostéopathie animale effectuent
                des actes de manipulations et mobilisations non instrumentales,
                directes et indirectes, non forcées.
              </p>
            </p>
            <div className="flex justify-end -my-4">
              <Quote />
            </div>
            <p className="text-right">
              Registre national d'aptitude article L.243-3 du CRPM
            </p>
            <h3
              id="pratique"
              className="text-lg font-bold sm:font-extrabold text-purple-900 text-center mt-8"
            >
              Ma pratique
            </h3>
            <p>
              Je regroupe toutes les informations disponibles pour votre animal
              (vos observations, les miennes, sa façon de se déplacer, des tests
              de mobilité des différentes structures…). J’établis un schéma un
              fonctionnement duquel ressortent les interventions à réaliser pour
              l’aider au mieux. Ces interventions sont uniquement manuelles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
