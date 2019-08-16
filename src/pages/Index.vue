<template>
  <Layout>
    <div class="home">
      <div class="intro">
        <g-image :src="image" class="profile-image"/>
        <h1 class="title">Hi, I'm Kyrsten.</h1>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'home',
  components: {},
  computed: {
    image: () => require('~/assets/images/kyrsten.jpg')
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
.home {
  flex: 1;
  display: flex;
  justify-content: center;

  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0;
  
    .profile-image {
      width: 60%;
      border-radius: 50%;
      margin-right: spacing(0);
      transition: width .2s ease;
    }
  
    .title {
      font-size: rem(36);
      transition: font-size .2s ease;
    }
  
    @include media($screen-sm) {
      // Subtract ~ the height of the header so the intro looks centered
      margin-top: rem(-100);
      flex-direction: row;
  
      .profile-image {
        width: 25%;
        max-width: 150px !important;
        margin-right: spacing(3);
      }
  
      .title {
        font-size: rem(44);
      }
    }
  
    @include media($screen-md) {
      .title {
        font-size: rem(56);
      }
    }
  
    @include media($screen-lg) {
      .profile-image {
        margin-right: spacing(5);
      }
  
      .title {
        font-size: rem(64);
      }
    }
  }
}
</style>
