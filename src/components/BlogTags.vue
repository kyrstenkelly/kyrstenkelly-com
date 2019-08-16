<template>
  <div class="tags" v-if="tags">
    <div class="tags__tag" v-for="tag in tags" :key="tag">
      {{ tag }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-tags',
  props: ['tags']
}
</script>

<style lang="scss">
.tags {
  display: flex;
  margin-bottom: spacing(1);

  &__tag {
    margin: 0 spacing(1) 0 0;
    padding: 2px 5px;
    color: white;
    background-color: $teal-dark;
    border-radius: 4px;
  }
}
</style>