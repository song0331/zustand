import { create } from "zustand";

const initCount = 10;

const store = (set) => ({
  count: initCount,
  inc: () =>
    set((store) => ({
      count: store.count + 1,
    })),
  dec: () =>
    set((store) => ({
      count: store.count - 1,
    })),
});

const countStore = create(store);

export default countStore;
