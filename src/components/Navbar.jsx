import { Link } from "react-router-dom";
import useFavoritesStore from "../store/useFavoritesStore";

function Navbar() {
  const favorites = useFavoritesStore((s) => s.favorites);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f1a]/80 backdrop-blur border-b border-white/10 px-10 py-5 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide">
        KINO <span className="text-yellow-400">KATALOGI</span>
      </h1>

      <div className="flex items-center gap-6">
        <Link className="text-gray-300 hover:text-white transition" to="/">
          Bosh sahifa
        </Link>

        <Link
          to="/favorites"
          className="flex items-center gap-2 bg-yellow-500/10 px-3 py-1 rounded-full text-yellow-400 hover:bg-yellow-500/20 transition"
        >
          ⭐ Sevimlilar
          <span className="bg-yellow-400 text-black px-2 rounded-full text-sm font-semibold">
            {favorites.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
