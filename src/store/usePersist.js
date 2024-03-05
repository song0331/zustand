import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePersist = create(
  persist(
    (set) => ({
      number: 100,
      plus: () => set((state) => ({ number: state.number + 10 })),
      minus: () => set((state) => ({ number: state.number - 10 })),
    }),
    { name: "카운트" }
  )
);

export default usePersist;
