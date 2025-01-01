import { create } from "zustand";

export const useUserStore = create((set) => ({
  users:[],
  setUsers :(users)=>set({users}),
  loggedInUser: JSON.parse(sessionStorage.getItem("loggedInUser")) || null,
  setLoggedInUser: (user) => {
    set({ loggedInUser: user });
    sessionStorage.setItem("loggedInUser", JSON.stringify(user));
  },
  logoutUser: () => {
    set({ loggedInUser: null });
    sessionStorage.removeItem("loggedInUser");
  },
}));

export const useCardData = create((set) => ({
  cards: [],
  selectedCard: null,
  selectedMarker: [],
  setSelectedMarker: (selectedMarker) => set({ selectedMarker }),
  setSelectedCard: (card) => set({ selectedCard: card }),
  setCards: (cards) => set({ cards }),
}));

export const useThemeStore = create((set) => ({
  theme: sessionStorage.getItem("theme") || "light",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      sessionStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));
