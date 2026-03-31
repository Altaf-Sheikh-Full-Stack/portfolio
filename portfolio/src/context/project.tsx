import { createContext, useContext, useState } from "react";


type Image = {
  url: string;
};

export type Project = {
  imgs: Image[];
  name: string;
  description: string;
  budget: string;
};

type ProjectContextType = {
  data: Project[];
  setData: React.Dispatch<React.SetStateAction<Project[]>>;
};

const ProjectContext = createContext<ProjectContextType | null>(null);

export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {




  const [data, setData] = useState<Project[]>([]);

  return (
    <ProjectContext.Provider value={{ data, setData }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useSubNav must be used inside provider");
  return context;
};