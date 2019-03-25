import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i += 1) {
        if (
          localStorage.key(i) !== "loglevel:webpack-dev-server" &&
          localStorage.key(i) !== "__test__"
        ) {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //console.log(localStorage.getItem(localStorage.key(i)), arr);
        }
      }
    }
    return arr;
  }
};
export default new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters: {
    completedNum(state) {
      let num = 0;
      const ddd = state.todoItems;
      ddd.forEach(item => {
        if (item.completed === false) {
          num++;
        }
      });
      return num;
    }
  },
  mutations: {
    addOneItem(state, payload) {
      const obj = {
        completed: false,
        text: payload.newTodoItem,
        date: payload.time
      };
      localStorage.setItem(payload.newTodoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.text);
      state.todoItems.splice(payload.index, 1);
    },
    // 수정 기능 넣기
    toggleOneItem(state, payload) {
      payload.todoItem.completed = !payload.todoItem.completed;
      localStorage.removeItem(payload.todoItem.text);
      localStorage.setItem(
        payload.todoItem.text,
        JSON.stringify(payload.todoItem)
      );
    }
  },
  actions: {}
});
