export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 navbar bg-purple-800 text-white shadow-xl px-12 rounded-b-xl w-[98%] mx-auto">
      <div className="flex-1">
        <a className="text-xl">Eqcaetio</a>
      </div>

      <div className="flex items-center gap-4 font-semibold text-sm cursor-pointer">
        <a className="hover:text-purple-300">À propos</a>
        <a className="hover:text-purple-300">Annuaire</a>
      </div>
    </div>
  );
}
