import { create } from "zustand";
import { ApiDataStore, User } from "./apiData.type.ts";


export const useApiDataStoreQuery = create<ApiDataStore>((set) => ({
    users: [],
    isLoading: false,
    loadUsersAxios: async () => {

    },
    setUsers: (users: User[]) => set({ users }),
}));
