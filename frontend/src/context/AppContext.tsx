import axios from "axios";
import { createContext, useState, type ReactNode } from "react";
const AppContext = createContext(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({children}: AppProviderProps) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(false);

    const [location, setLocation] = useState(null);
    const [loadingLocation, setLoadingLocation] = useState(false);
    const [city, setCity] = useState("Fetching location...");

    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");

        const {data} = await axios.get(`${authService/me}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
