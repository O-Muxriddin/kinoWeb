import { useNavigate } from "react-router-dom";
import useFavoritesStore from "../store/useFavoritesStore";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();
  const saved = isFavorite(movie.id);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    saved ? removeFavorite(movie.id) : addFavorite(movie.id);
  };

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="group relative bg-[#1a1c20] border border-white/5 w-full max-w-70 rounded-3xl p-5 cursor-pointer 
                 hover:bg-[#222429] hover:border-white/20 transition-all duration-300 ease-out hover:-translate-y-2 shadow-2xl"
    >
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={toggleFavorite}
          className={`p-2 rounded-xl transition-all ${
            saved
              ? "bg-yellow-400/20 text-yellow-400"
              : "bg-white/5 text-gray-400 hover:bg-white/10"
          }`}
        >
          {saved ? "★" : "☆"}
        </button>
        <div className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-md">
          <span className="text-yellow-500 text-xs font-bold">★</span>
          <span className="text-white text-xs font-semibold">
            {movie.rating}
          </span>
        </div>
      </div>
      <div className="relative h-40 flex items-center justify-center  from-white/5 to-transparent rounded-2xl mb-5 overflow-hidden">
        <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
          {movie.emoji}
        </span>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>
      {/* Ma'lumotlar */}
      <div className="space-y-1">
        <h3 className="text-white font-bold text-lg leading-tight truncate">
          {movie.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
          <span>{movie.year}</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          <span>{movie.duration}</span>
        </div>

        <p className="text-gray-500 text-[11px] uppercase tracking-wider font-semibold mt-2">
          {movie.genre.join(" • ")}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
