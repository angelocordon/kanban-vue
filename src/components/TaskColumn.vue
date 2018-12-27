<template>
  <div class="column task-column">
    <div class="column-header" :style="columnHeaderStyle">
      <h1 class="column-owner">{{ columnOwner }}</h1>
    </div>
    <!-- task cards -->
    <!-- Add card -->
    <button class="button is-small task-button-add">＋ Add a Task</button>
  </div>
</template>

<script>
export default {
  name: "task-column",
  props: { columnOwner: String, columnColor: String },

  computed: {
    columnHeaderStyle: function() {
      return { backgroundColor: this.columnColor };
    }
  }
};
</script>

<style lang="scss">
.task-column {
  border: 1px dotted fade-out(#363636, 0.8);
  margin: 5rem 25px;
  padding: 0px;

  > .task-button-add {
    margin-top: 1rem;
    background-color: transparent;
    border-color: transparent;
    color: #7a7a7a;
    font-size: 0.8em;
    font-weight: bold;
    &:hover {
      color: #363636;
    }
  }
}

.column-header {
  display: flex;
  align-items: center;
  height: 32px;
  > .column-owner {
    padding-left: 12px;
    padding-right: 12px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }
}
</style>
