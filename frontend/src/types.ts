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
    location: LocationData | null;
    loadingLocation: boolean;
    city: string;
}