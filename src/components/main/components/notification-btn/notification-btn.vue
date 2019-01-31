<template>
  <div class="message">
    <!--<Badge :dot="!!messageUnreadCount" type="warning">-->
    <Badge dot>
      <Icon type="md-notifications" size="18" @click="message"></Icon>
    </Badge>
  </div>
</template>

<script>
export default {
  name: 'NotificationBtn',
  props: {
    messageUnreadCount: {
      type: Number,
      default: 1
    }
  },

  methods: {
    message () {
      this.$router.push({
        name: 'message_page'
      })
    }
  }
}
</script>

<style lang="less">
  .message {
    cursor: pointer;
    color: #ffffff;
    .ivu-badge-dot {
      top: 16px;
    }
  }
</style>
