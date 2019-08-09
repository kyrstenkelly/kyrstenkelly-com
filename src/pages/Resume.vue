<template>
  <Layout class="resume">
    <h1 class="title">Resume</h1>

    <div class="section">
      <div class="section__title">
        <img svg-inline class="section__icon" :src="icons.code" alt="code"/>
        Things I know
      </div>

      <div class="section__content">
        <Languages v-bind="{languages, activeKey}" />
      </div>
    </div>

    <div class="section">
      <div class="section__title">
        <img svg-inline class="section__icon" :src="icons.tools" alt="tools"/>
        Tools I've Used
      </div>

      <div class="section__content">
        <Tools v-bind="{tools, activeKey}" />
      </div>
    </div>

    <div class="section">
      <div class="section__title">
        <img svg-inline class="section__icon" :src="icons.building" alt="building"/>
        Places I've Worked
      </div>

      <div class="section__content">
        <Jobs v-bind="{jobs, highlight, unhighlight}" />
      </div>
    </div>
  </Layout>
</template>

<script>
  import Languages from '~/components/Languages.vue';
  import Jobs from '~/components/Jobs.vue';
  import Tools from '~/components/Tools.vue';
  import data from '../data';

  export default {
    name: 'resume',
    components: {
      Languages,
      Jobs,
      Tools,
    },
    computed: {
      icons: () => ({
        code: require('~/assets/images/code.svg'),
        tools: require('~/assets/images/tools.svg'),
        building: require('~/assets/images/building.svg'),
      })
    },
    methods: {
      highlight: function(key) {
        this.activeKey = key;
      },
      unhighlight: function() {
        this.activeKey = '';
      },
    },
    data() {
      return {
        activeKey: '',
        languages: data.languages,
        tools: data.tools,
        jobs: data.jobs,
      }
    },
    metaInfo: {
      title: 'Resume'
    }
  }
</script>

<style lang="scss">
.resume {
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: spacing(4);

    &__title {
      display: flex;
      align-items: center;

      font-family: $font-family-title;
      font-size: rem(20);
      line-height: rem(28);
      text-transform: uppercase;
      font-weight: $font-weight-semibold;
      letter-spacing: 1px;
    }

    &__icon {
      width: $icon-size;
      height: $icon-size;
      margin-right: spacing(1);
    }

    &__content {
      padding-left: 0;
      margin: spacing(3) 0 spacing(2);
      width: 100%;
    }

    @include media($screen-sm) {
      align-items: flex-start;

      &__content {
        padding-left: $icon-size + spacing(1);
      }
    }
  }
}
</style>
