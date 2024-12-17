"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface IpAddressContextType {
  location: string;
}

interface LocationProviderProps {
  children: ReactNode;
}

const IpAddressContext = createContext<IpAddressContextType | undefined>(
  undefined
);

export const LocationProvider: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    (async () => {
      const ipRes = await fetch("https://api.ipify.org/?format=json");
      if (ipRes.ok) {
        const { ip: ipAddress } = await ipRes.json();
        const locationRes = await fetch(
          `https://api.iplocation.net/?ip=${ipAddress}`
        );

        if (locationRes.ok) {
          const locationData = await locationRes.json();
          setLocation(locationData.country_name);
        }
      }
    })();
  }, []);

  return (
    <IpAddressContext.Provider value={{ location }}>
      {children}
    </IpAddressContext.Provider>
  );
};

// Custom hook to consume the IpAddressContext
export const useLocation = (): IpAddressContextType => {
  const context = useContext(IpAddressContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
