import { create } from "zustand";

type NavigationState = {
  sidebarExpanded: boolean;
};

type NavigationAction = {
  updateSidebarExpanded: (state: NavigationState["sidebarExpanded"]) => void;
};

export type NavigationStore = NavigationState & NavigationAction;

export const useNavigationStore = create<NavigationStore>((set) => ({
  sidebarExpanded: false,
  updateSidebarExpanded: (updatedState) =>
    set(() => ({ sidebarExpanded: updatedState })),
}));
