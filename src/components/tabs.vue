<template>
  <div>
    <ul class="tabs">
        <li v-for="(tab, index) in tabs" :key="index" :class="{'is-active': tab.isActive}">
            <a @click="selectTab(tab)">
                <span>{{ tab.name }}</span>
                <span class="tag" v-if="tab.tags.length > 0" v-for="(tag, index) in tab.tags" :key="index" :style="[tag.color ? {backgroundColor: tag.color} : '']">{{ tag.content }}</span>
            </a>
        </li>
    </ul>
    <div class="tabs-details">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

  name: 'tabs',

  data () {
    return {
      tabs: [],
    }
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    },
  },

  created () {
    this.tabs = this.$children
  },
}

</script>

<style lang="scss" scoped>
    ul.tabs {
        width: 100%;
        border-bottom:2px solid rgb(234, 234, 234);
        margin-bottom: 24px;
        li {
            display: inline-block;
            padding: 8px;
            height: 40px;
            box-sizing: border-box;
            list-style: none;
            cursor: pointer;
            a {
                display: block;
                height: 100%;
                width: 100%;
                color: #707070;
                font-weight: 600;
                font-size: 14px;

                .tag {
                    font-size: 12px;
                    font-weight: 600;
                    background: rgba(0, 0, 0, 0.07);
                    color: #707070;
                    margin-left:4px;
                    border-radius: 4px;
                    display: inline-block;
                    margin-right: 0;
                    padding: 2px 8px;
                }
            }
            &.is-active {
                position: relative;
                a {
                    color: #000;
                }
                &:after {
                    content: ' ';
                    height: 2px;
                    width: 100%;
                    position: absolute;
                    bottom:-2px;
                    left:0;
                    background:  rgb(167, 167, 167);
                    z-index: 100;
                }
            }
        }
    }
</style>
