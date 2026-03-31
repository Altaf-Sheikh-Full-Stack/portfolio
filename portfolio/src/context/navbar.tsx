import { createContext, useContext, useState } from "react";

type SubNavContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const SubNavContext = createContext<SubNavContextType | null>(null);

export const SubNavProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SubNavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SubNavContext.Provider>
  );
};

export const useSubNav = () => {
  const context = useContext(SubNavContext);
  if (!context) throw new Error("useSubNav must be used inside provider");
  return context;
};