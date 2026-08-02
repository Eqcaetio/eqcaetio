import Button from "./Button";

export default function Hero() {
  return (
    <div className="hero bg-gradient-to-b from-purple-500 to-white py-36 ">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl text-purple-950 font-extrabold">Bonjour</h1>
          <p className="py-6 text-lg text-purple-800">
            Actuellement indisponible jusqu'au [Date], vous pouvez contacter ma
            collaboratrice [Nom] au [Tel] pour toute consultation
            d'ostéopathie animale.
            <br />
            Concernant les urgences, [Nom], vétérinaire à [Lieu] est joignable
            au [Tel].
            <br />
            Merci pour votre compréhension.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button>À propos</Button>
            <Button variant="secondary">Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
