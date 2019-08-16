<template>
  <div class="layout">
    <header class="layout__header">
      <nav class="nav">
        <g-link 
          class="nav__link" 
          v-if="$route.path !== '/'" 
          to="/"
        >
          Home
        </g-link>
        <!-- Empty div if we are on home page so flex works right -->
        <div v-if="$route.path === '/'"></div> 

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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;

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

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__header, &__content {
    max-width: 100vw;
    margin: spacing(2);
    overflow: hidden;
  
    @include media($screen-sm) {
      margin: spacing(2) spacing(4);
    }
  
    @include media($screen-md) {
      width: 100%;
      max-width: $content-max-width;
      margin: spacing(3) spacing(6);
    }
  
    @include media($screen-lg) {
      margin: spacing(4) auto;
    }
  }
}
</style>
