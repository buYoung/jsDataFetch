import { create } from "zustand";
import { ApiDataStore, User } from "./apiData.type.ts";
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import { url } from "../const/common.ts";

const instance = Axios.create();
const axios = setupCache(instance);

export const useApiDataStoreAxios = create<ApiDataStore>((set) => ({
    users: [],
    isLoading: false,
    loadUsersAxios: async () => {
        set({ isLoading: true });
        const response = await axios<User[]>(url.toString(), {
            id: 'axios-users',
            responseType: 'json'
        });

        set({ users: response.data, isLoading: false });
    },
    setUsers: (users: User[]) => set({ users }),
}));
