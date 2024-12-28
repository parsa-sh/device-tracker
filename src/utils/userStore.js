import create from "zustand";

export const useUserStore = create((set) => ({
  loggedInUser: null,
  setLoggedInUser: (user) => set({ loggedInUser: user }),
  LogoutUser: () => set({ loggedInUser: null }),
}));
