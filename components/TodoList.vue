<template>
  <div>
    <div v-if="propsdata === 'today'">
      <ul class="items">
        <li
          v-for="(todoItem, index) in this.$store.state.todoItems"
          v-if="todoItem.date === todayDate"
          v-bind:key="index"
          v-bind:class="{ complete: todoItem.completed }"
        >
          <input
            type="checkbox"
            :checked="todoItem.completed"
            v-on:click="toggleComplete(todoItem, index);"
          />
          {{ todoItem.text }}
          <span class="btn_remove" v-on:click="removeTodo(todoItem, index);">
            del
          </span>
          <span class="due_date"> {{ todoItem.date }} </span>
        </li>
      </ul>
    </div>

    <div v-else-if="propsdata === 'all'">
      <ul class="items">
        <li
          v-for="(todoItem, index) in this.$store.state.todoItems"
          v-bind:key="index"
          v-bind:class="{ complete: todoItem.completed }"
        >
          <input
            type="checkbox"
            :checked="todoItem.completed"
            v-on:click="toggleComplete(todoItem, index);"
          />
          {{ todoItem.text }}
          <span class="btn_remove" v-on:click="removeTodo(todoItem, index);">
            del
          </span>
          <span class="due_date"> {{ todoItem.date }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  data: function() {
    return {
      todayDate: this.$moment(Date.now()).format("YYYYMMDD")
    };
  },
  methods: {
    removeTodo: function(todoItem, index) {
      //this.$emit("removeItem", todoItem, index);
      this.$store.commit("removeOneItem", { todoItem, index });
    },
    toggleComplete: function(todoItem, index) {
      // this.$emit("toggleItem", todoItem, index)
      this.$store.commit("toggleOneItem", { todoItem, index });
    }
  }
};
</script>

<style scope>
.items li {
  position: relative;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  border-radius: 3px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 6px 0 6px;
}
li.complete {
  text-decoration: line-through;
  color: #ddd;
}
.btn_remove {
  color: #ddd;
  font-size: 12px;
  border: 1px solid #ddd;
  cursor: pointer;
  padding: 0 2px;
}
.due_date {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #333;
  margin-left: 5px;
  font-size: 11px;
  padding: 1px 0;
  line-height: 21px;
  display: block;
}
.due_date:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 1px;
  left: 0;
  border-bottom: 1px solid #dd4b39;
}
</style>
