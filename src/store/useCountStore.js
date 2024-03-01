import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 10,
  inc: () => set((store) => ({ count: store.count + 1 })),
  dec: () => set((store) => ({ count: store.count - 1 })),
}));

// 일반함수 버젼
// export const useCountStore = create(function (set) {
//   return {
//     count: 10,
//     inc: function () {
//       return set(function (store) {
//         return { count: store.count + 1 };
//       });
//     },
//     dec: function () {
//       return set(function (store) {
//         return { count: store.count - 1 };
//       });
//     },
//   };
// });

// const store = (set) => ({
//   count: initCount,
//   num: n,
//   inc: () => set((store) => ({ count: store.count + 1 })),
//   dec: () => set((store) => ({ count: store.count - 1 })),
// });
// const useCountStore = create(store);
// export default useCountStore;

/**
  일반함수
  dec1: function () {
    set((store) => ({ count: store.count - 1 }));
  }


  화살표함수
  dec2: () => {
    return set((store) => ({ count: store.count - 10 }));
  }


  화살표함수 생략버전
  dec3: () => set((store) => ({ count: store.count - 20 })),


  신문법 concise
  dec4() {
    set((store) => ({ count: store.count - 30 }));
  }
 */
