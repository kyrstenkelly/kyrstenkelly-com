<template>
  <div class="layout">
    <header class="layout__header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>

        <span>
          <g-link class="nav__link" to="/blog">Blog</g-link>
          <g-link class="nav__link" to="/resume">Resume</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
        </span>
      </nav>
    </header>

    <div class="layout__content">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
.layout {
  &__header {
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__link {
        margin-left: 20px;
        text-decoration: none;

        &.left {
          align-self: flex-start;
        }

        &:first-of-type {
          margin-left: 0;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &__header, &__content {
    max-width: $content-max-width;
    margin: spacing(2);
  
    @include media($screen-sm) {
      margin: spacing(2) spacing(4);
    }
  
    @include media($screen-md) {
      margin: spacing(3) spacing(6);
    }
  
    @include media($screen-lg) {
      margin: spacing(4) auto;
    }
  }
}
</style>
