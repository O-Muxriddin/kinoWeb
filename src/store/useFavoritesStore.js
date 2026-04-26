import { create } from "zustand";

const useFavoritesStore = create((set, get) => ({
  favorites: [],

  addFavorite: (id) => {
    const current = get().favorites;
    if (!current.includes(id)) {
      set({ favorites: [...current, id] });
    }
  },

  removeFavorite: (id) => {
    const current = get().favorites;
    set({ favorites: current.filter((item) => item !== id) });
  },

  isFavorite: (id) => {
    return get().favorites.includes(id);
  },
}));
export default useFavoritesStore;
