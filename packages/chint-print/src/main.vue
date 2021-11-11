<template>
  <div>
    <button
    class="chint-button"
    @click="handleClick"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : ''
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
  </div>
</template>

<script>
export default {
  name: 'chintPrint',

  props: {
    type: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
  },

  methods: {
    handleClick(){
      alert("btn")
    }
  },

  computed: {}
}
</script>
