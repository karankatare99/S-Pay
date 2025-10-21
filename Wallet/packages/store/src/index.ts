// import { create } from "zustand";

// interface User {
//   name?: string | null;
//   email?: string | null;
//   image?: string | null;
// }

// interface UserStore {
//   user: User | null;
//   loading: boolean;
//   error: string | null;
//   fetchUser: () => Promise<void>;
//   clearUser: () => void;
// }

// export const useUserStore = create<UserStore>((set) => ({
//   user: null,
//   loading: false,
//   error: null,

//   fetchUser: async () => {
//     try {
//       set({ loading: true, error: null });

//       const res = await fetch("/api/user", { cache: "no-store" });
//       if (!res.ok) throw new Error("User not logged in");

//       const data = await res.json();
//       set({ user: data.user, loading: false });
//     } catch (err: any) {
//       set({ user: null, error: err.message, loading: false });
//     }
//   },

//   clearUser: () => set({ user: null }),
// }));
