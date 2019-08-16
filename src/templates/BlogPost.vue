<template>
  <Layout>
    <div class="post">
      <h1 class="post__title title">
        <router-link class="post__title-back" :to="'/blog'">
          <font-awesome-icon icon="chevron-left"></font-awesome-icon>
        </router-link>
        {{ $page.blogPost.title }}
      </h1>
      <div class="post__date">{{ $page.blogPost.date }}</div>
      <blog-tags :tags="$page.blogPost.tags"/>
      <div class="post__content" v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<script>
import BlogTags from '~/components/BlogTags.vue';

export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  },
  components: {
    BlogTags
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "MMMM D, YYYY")
      tags
      content
    }
  }
</page-query>

<style lang="scss">
.post {
  display: flex;
  flex-direction: column;

  &__title {
    position: relative;
    margin-bottom: spacing(1);

    &-back {
      position: absolute;
      left: rem(-50);
    }
  }

  &__date {
    font-size: rem(14);
    margin-bottom: spacing(2);
  }

  // Some overrides to the prism styles
  code[class="language-text"] {
    font-size: 82%;
    padding: .2em .4em;
  }
}
</style>