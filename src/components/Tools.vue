<template>
  <ul class="tools">
    <li
      :class="`tools__item ${item.jobs.includes(activeKey) ? 'active' : ''}`"
      v-for="item in tools"
      :key="item.key"
    >
      <a class="link" :href="item.link" target="_blank">
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tools',
  props: {
    activeKey: String,
    tools: Array,
  }
}
</script>

<style lang="scss">
.tools {
  display: block;
  padding-left: 0;
  margin: 0;
  columns: 2;

  &__item {
    display: block;
    text-align: center;
    padding-bottom: spacing(1);

    a {
      color: $slate;
    }

    &.active {
      a {
        color: $teal;
      }
    }
  }

  @include media($screen-sm) {
    columns: 3;

    &__item {
      text-align: left;
    }
  }

  @include media($screen-md) {
    columns: 4;
  }

  @include media($screen-lg) {
    columns: 5;
  }
}
</style>
