import { useNavigate } from "react-router-dom";
import { MOVIES } from "../data/movies";
import useFavoritesStore from "../store/useFavoritesStore";

function FavoritesPage() {
  const { favorites, removeFavorite } = useFavoritesStore();
  const navigate = useNavigate();

  const favMovies = favorites
    .map((id) => MOVIES.find((m) => m.id === id))
    .filter(Boolean);

  if (favMovies.length === 0) {
    return (
      <div className="px-10 py-10 pt-40">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold">
              MENING <span className="text-yellow-400">SEVIMLILARIM</span>
            </h1>
            <p className="text-gray-400 mt-2">0 ta film saqlangan</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-32 text-center">
          <div className="text-6xl text-yellow-400 mb-6">⭐</div>

          <h2 className="text-xl font-semibold mb-2">Sevimlilar bo‘sh</h2>

          <p className="text-gray-400 mb-6 max-w-md">
            Hali hech qanday film saqlanmagan. Katalogdan filmlar qo‘shing.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Katalogga o‘tish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-10 py-10 pt-40">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-5xl font-bold">
            MENING <span className="text-yellow-400">SEVIMLILARIM</span>
          </h1>
          <p className="text-gray-400 mt-2">
            {favMovies.length} ta film saqlangan
          </p>
        </div>

        <button
          onClick={() => favMovies.forEach((m) => removeFavorite(m.id))}
          className="px-4 py-2 border border-white/10 rounded-lg text-gray-400 hover:bg-white/10 transition"
        >
          Hammasini tozalash
        </button>
      </div>

      <div className="grid grid-cols-6 gap-6">
        {favMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 cursor-pointer hover:scale-105 transition"
          >
            <div className="flex justify-between mb-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFavorite(movie.id);
                }}
                className="text-yellow-400"
              >
                ⭐
              </button>

              <span className="text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-full text-sm">
                ★ {movie.rating}
              </span>
            </div>

            <div className="h-32 flex items-center justify-center text-4xl opacity-70">
              {movie.emoji}
            </div>

            <h3 className="mt-4 font-semibold">{movie.title}</h3>

            <p className="text-gray-400 text-sm">
              {movie.year} · {movie.duration}
            </p>

            <p className="text-gray-500 text-xs mt-1">
              {movie.genre.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
