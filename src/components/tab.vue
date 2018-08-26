<template>
  <div v-show="isActive">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab',

  props: {
    name: { required: true },
    selected: { default: false },
    tags: { type: Array, default: () => [] },
  },

  data () {
    return {
      isActive: false,
    }
  },

  mounted () {
    this.isActive = this.selected
  },
}
</script>
