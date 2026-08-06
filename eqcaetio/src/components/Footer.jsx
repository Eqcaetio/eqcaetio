export default function Footer() {
  return (
    <div className="flex flex-col items-center  text-center bg-neutral text-neutral-content h-96">
      <p className="m-4">© 2026 Eqcaetio — Réalisé par Lun-e.</p>
      <p className="footer-title border-t w-full pt-24">Plan du site</p>

      <footer className="footer footer-horizontal p-4 justify-around">
        <nav className="flex flex-col items-center text-center">
          <h1>
            <a href="#top" className="footer-title link link-hover">
              Accueil
            </a>
          </h1>
          <p>Actualité</p>
          <p>Contact</p>
          <p>Liens</p>
        </nav>
        <nav className="flex flex-col items-center text-center">
          <h1>
            <a href="#mod" className="footer-title link link-hover">
              Consultation
            </a>
          </h1>
          <p>Modalités</p>
          <p>Cabinets</p>
          <p>Navigation</p>
        </nav>

        <nav className="flex flex-col items-center text-center">
          <h1>
            <a href="#metiers" className="footer-title link link-hover">
              Metiers
            </a>
          </h1>
          <a href="#way" className="link link-hover">
            Parcours
          </a>
          <a href="#definition" className="link link-hover">
            Définition
          </a>
          <a href="#pratique" className="link link-hover">
            Ma pratique
          </a>
        </nav>

        <nav className="flex flex-col items-center text-center">
          <h1>
            {" "}
            <a href="#about" className="footer-title">
              À propos
            </a>
          </h1>

          <p>Contact</p>
          <p>Siret</p>
          <p>Cursus</p>
        </nav>
      </footer>
    </div>
  );
}
