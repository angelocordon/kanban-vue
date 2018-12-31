<template>
  <div class="column-header" :style="headerBackground">
    <h1 class="column-owner">{{ ownerName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'column-header',
  props: {
    columnOwner: String,
    headerColor: String
  },
  computed: {
    ownerName() {
      return this.columnOwner;
    },
    headerBackground() {
      return {
        backgroundColor: this.headerColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
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
