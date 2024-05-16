import { create } from "zustand";

const useStore_imgNum = create((set) => ({
  imgNum: 0,
  ToZero: () => set((state) => ({ imgNum: 0 })),
  ToOne: () => set((state) => ({ imgNum: 1 })),
  ToTwo: () => set((state) => ({ imgNum: 2 })),
}));

export default useStore_imgNum;
