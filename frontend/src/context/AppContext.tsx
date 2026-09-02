import axios from "axios";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { AppContextType, User } from "../types";
import { authService } from "../main";

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({children}: AppProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(false);

    const [location, setLocation] = useState(null);
    const [loadingLocation, setLoadingLocation] = useState(false);
    const [city, setCity] = useState("Fetching location...");

    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");

        const {data} = await axios.get(`${authService}/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data.user);
        setIsAuth(true);
      } catch (error) {
        console.log("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
      // setLoading(true);
      fetchUser();
    }, []);

    return (<AppContext.Provider value={{isAuth, loading, setUser, setIsAuth, setLoading}}>{children}</AppContext.Provider>)

  }

export const useAppData = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppData must be used within an AppProvider");
  }
  return context;
}
