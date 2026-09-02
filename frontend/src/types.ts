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