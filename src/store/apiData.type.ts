export interface User {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
}

export interface ApiDataState {
    users: User[];
    isLoading: boolean;
}

export interface ApiDataAction {
    loadUsersAxios: () => Promise<void>;
    setUsers: (users: User[]) => void;
}

export interface ApiDataStore extends ApiDataState, ApiDataAction {}
