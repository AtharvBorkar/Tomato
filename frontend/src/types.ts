export interface User {
    _id: string;
    name: string;
    email: string;
    image: string;
    role: string;
}

export interface LocationData {
    latitude: number;
    longitude: number;
    foormattedAddress: string;
}


export interface AppContextType {
    user: User | null;
    isAuth: boolean;
    loading: boolean;
    city: string;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}