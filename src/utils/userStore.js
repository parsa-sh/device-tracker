import { create } from "zustand";

export const useUserStore = create((set) => ({
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
