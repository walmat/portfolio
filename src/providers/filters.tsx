"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const FilterOptions = ["All", "About", "Projects", "Media"];

interface FiltersContext {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  options: string[];
}

const FiltersContext = createContext<FiltersContext>({} as FiltersContext);

interface FiltersProviderProps {
  children: PropsWithChildren<React.ReactNode>;
}

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [active, setActive] = useState("All");

  return (
    <FiltersContext.Provider value={{ active, setActive, options: FilterOptions }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => useContext(FiltersContext);
