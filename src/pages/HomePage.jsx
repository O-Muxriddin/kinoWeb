import { useState } from "react";
import { MOVIES } from "../data/movies";
import MovieCard from "../components/MovieCard";

function HomePage() {
  const [query, setQuery] = useState("");

  const filtered = MOVIES.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="px-10 py-10 pt-40">
      <h1 className="text-5xl font-bold mb-4">
        KINO <span className="text-yellow-400">DUNYOSI</span>
      </h1>

      <p className="text-gray-400 mb-8">
        Eng yaxshi filmlarni kashf eting va sevimlilarga saqlang
      </p>

      <input
        className="w-full max-w-md px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-yellow-400"
        placeholder="Film nomini qidirish..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />


      <h2 className="mt-10 mb-4 text-gray-400 tracking-widest text-sm">
        BARCHA FILMLAR
      </h2>

      <div className="grid grid-cols-6 gap-6">
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
