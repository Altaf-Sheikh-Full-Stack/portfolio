import { createContext, useContext, useState } from "react";


type Image = {
  url: string;
};

export type ProjectType = {
  imgs: Image[];
  name: string;
  description: string;
  budget: string;
};

type Datatype = {type: "Navbar"} | { type: "Project"; data: ProjectType[] } | {type : "null"}

type ModalContextType = {
  component: Datatype;
  setComponent: (value: Datatype) => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [component, setComponent] = useState<Datatype>({type: "null"});

  return (
    <ModalContext.Provider value={{ component, setComponent }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Model must be used inside provider");
  return context;
};