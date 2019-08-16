<template>
  <Layout class="about">
    <h1 class="title">About Me</h1>
    <ul class="links">
      <li class="links__item">
        <a class="link" href="https://www.linkedin.com/in/kyrsten-kelly/" target="_blank">LinkedIn</a>
      </li>
      <li class="links__item">
        <a class="link" href="https://github.com/kyrstenkelly" target="_blank">Github</a>
      </li>
    </ul>
    <p>
      I'm a full-stack Software Engineer in Austin, TX. I have a passion for problem solving, and love working alongside collaborative people.
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Me'
  }
}
</script>

<style lang="scss">
.about {
  .links {
    display: flex;
    list-style: none;
    padding: 0;
    
    &__item {
      margin-right: spacing(2);
    }
  }
}
</style>