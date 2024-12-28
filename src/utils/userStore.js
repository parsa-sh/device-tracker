import { create } from "zustand";

export const useUserStore = create((set) => ({
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  setLoggedInUser: (user) => {
    set({ loggedInUser: user });
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  },
  logoutUser: () => {
    set({ loggedInUser: null });
    localStorage.removeItem("loggedInUser");
  },
}));
