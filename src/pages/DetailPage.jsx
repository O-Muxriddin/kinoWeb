import { useParams, useNavigate } from "react-router-dom";
import { MOVIES } from "../data/movies";
import useFavoritesStore from "../store/useFavoritesStore";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const movie = MOVIES.find((m) => m.id === Number(id));

  if (!movie) return <p className="p-10">Film topilmadi</p>;

  const saved = isFavorite(movie.id);

  return (
    <div className="px-10 py-10 pt-40">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
      >
        ← Orqaga
      </button>

      <div className="flex gap-10">
        <div className="w-64 h-96 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-6xl">
          {movie.emoji}
        </div>

        <div>
          <div className="flex gap-2 mb-3">
            {movie.genre.map((g) => (
              <span
                key={g}
                className="text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full text-sm"
              >
                {g}
              </span>
            ))}
          </div>

          <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>

          <div className="flex gap-6 text-gray-400 mb-6">
            <span>⭐ {movie.rating}</span>
            <span>📅 {movie.year}</span>
            <span>⏱ {movie.duration}</span>
            <span>🌍 {movie.country}</span>
          </div>

          <div className="mb-6 max-w-xl">
            <p className="text-gray-400 uppercase text-sm mb-2 tracking-widest">
              Qisqacha mazmun
            </p>
            <p className="text-gray-300">{movie.desc}</p>
          </div>

          <p className="mb-8">
            Rejissor:{" "}
            <span className="text-yellow-400 font-medium">
              {movie.director}
            </span>
          </p>

          <div className="flex gap-4">
            <button
              onClick={() =>
                saved ? removeFavorite(movie.id) : addFavorite(movie.id)
              }
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              {saved
                ? "❌ Sevimlilardan o'chirish"
                : "⭐ Sevimlilarga qo‘shish"}
            </button>

            <button
              onClick={() => navigate("/")}
              className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              ← Katalogga qaytish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
