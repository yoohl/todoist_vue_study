<template>
  <div class="add_box">
    <input
      class="input_text"
      type="text"
      placeholder="할 일을 입력하세요"
      v-model="newTodoItem"
      v-on:keyup.enter="addTodo"
    />
    <div class="btn_calendar">
      <datepicker
        v-model="date"
        name="uniquename"
        :format="customFormatter"
        placeholder="일정"
        input-class="ip_calendar"
      ></datepicker>
    </div>
    <button class="btn_add" v-on:click="addTodo">작업추가</button>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  data: function() {
    return {
      newTodoItem: "",
      date: new Date()
    };
  },
  computed: {},
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== "") {
        let newTodoItem = this.newTodoItem;
        let time = this.$moment(this.date).format("YYYYMMDD");
        this.$store.commit("addOneItem", { newTodoItem, time });
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
    },
    customFormatter(date) {
      return this.$moment(date).format("MM/DD");
    }
  },
  components: {
    Datepicker
  }
};
</script>

<style>
.add_box {
  position: relative;
  vertical-align: top;
  margin: 20px 0;
}
.add_box .input_text {
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  width: 100%;
  padding: 11px 120px 10px 10px;
}
.add_box button {
  border: 0;
  vertical-align: top;
}
.btn_calendar {
  position: absolute;
  top: 2px;
  right: 2px;
  cursor: pointer !important;
  width: 110px;
  height: 33px;
}
.ip_calendar {
  border: 0;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  border-left: 1px solid #f3f3f3;
  padding: 10px 0 10px 10px;
}
.btn_add {
  display: block;
  font-weight: bold;
  font-size: 13px !important;
  line-height: 17px;
  text-decoration: none;
  padding: 6px 12px 7px 12px;
  position: relative;
  text-shadow: 0 1px 0 #fff;
  white-space: nowrap;
  background: linear-gradient(linear, 0 40%, 0 70%, from(#f3f3f3), to(#f1f1f1));
  border-radius: 3px !important;
  text-decoration: none !important;
  text-align: center;
  background-color: #db4c3f;
  color: #fff;
  text-shadow: none;
  margin-top: 5px;
}
</style>
