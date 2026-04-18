import { create } from "zustand";

interface Image {
  url: string;
};

export interface ProjectType {
  imgs: Image[];
  category: string;
  heading: string;
  budget: string;
  problem: string;
  solution: string;
  link:string;
};

type Datatype =
  | { type: "Navbar" }
  | { type: "Project"; data: ProjectType[] }
  | { type: "null" };

interface ModalStore {
  component: Datatype;
  setComponent: (value: Datatype) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  component: { type: "null" },
  setComponent: (value) => set({ component: value }),
}));