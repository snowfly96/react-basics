// 1. Define model
// + state
// + reducer
// + effect

export const count = {
  // 全局状态对象
  state: 0,
  // 处理状态变化的函数
  reducers: {
    increment(state, payload) {
      return state + payload;
    },
    decrease(state, payload) {
      return state - payload;
    },
  },
  // 处理副作用，不直接处理状态变化
  effects: (dispatch) => ({
    async incrementAsync(payload, rootState) {
      await new Promise((resolve) => {
        setTimeout(() => {}, 1000);
      });
      dispatch.count.increment(payload);
    },
  }),
};
