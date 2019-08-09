<template>
  <Layout class="blog">
    <ul class="post-list">
      <li class="post" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <router-link class="link-dark" :to="node.path">
          <h1 class="post__title title" v-html="node.title"/>
        </router-link>
        <div class="post__date" v-html="node.date"/>
        <div class="post__description" v-html="node.description"/>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "MMMM D, YYYY")
          description
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<style lang="scss">
.post-list {
  list-style: none;
  padding: 0;
  margin: spacing(4) 0;
}

.post {
  padding-bottom: spacing(3);

  &__title {
    margin-bottom: spacing(1);
  }

  &__date {
    margin-bottom: spacing(1);
    font-size: rem(14);
  }
}
</style>