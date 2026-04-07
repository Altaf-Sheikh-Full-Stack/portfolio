import { create } from "zustand";

type Image = {
  url: string;
};

export type ProjectType = {
  imgs: Image[];
  name: string;
  description: string;
  budget: string;
};

type Datatype =
  | { type: "Navbar" }
  | { type: "Project"; data: ProjectType[] }
  | { type: "null" };

type ModalStore = {
  component: Datatype;
  setComponent: (value: Datatype) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  component: { type: "Navbar" },
  setComponent: (value) => set({ component: value }),
}));