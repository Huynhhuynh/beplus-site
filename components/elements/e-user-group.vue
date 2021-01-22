<template>
  <div class="user-group-block">
    <ul>
      <li v-for="(user, index) in _users" :key="index" class="user-item">
        <span :class="'pos-' + user.position">
          <img v-if="user.member.featuredImage" :src="user.member.featuredImage.node.mediaItemUrl" :alt="user.member.title">
          <img v-else src="http://0.gravatar.com/avatar/0bf2bd424da01cef7b8bd5246c84f603?s=32&d=mm&f=y&r=g" alt="#">
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [ 'users', 'limit' ],
  computed: {
    _limit ()  {
      return this.limit || 3
    },
    _users () { 
      return this.users
    },
  }
}
</script>

<style lang="scss" scoped>
  .user-group-block {

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;

      li { 
        width: 40px;
        list-style: none;
        transition: .3s ease;
        -webkit-transition: .3s ease;

        span {
          display: block;
          width: 100%;
          line-height: 0;
          border-radius: 50px;
          border: solid 1px;
          padding: 2px;
          background: white;

          img {
            width: 100%;
            border-radius: 50px;
          }

          &.pos-manager {
            border-color: #00bcd4;
          }

          &.pos-developer {
            border-color: #673ab7;
          }
        }

        + li {
          margin-left: -25px;
        }
      }

      &:hover {

        li {
          margin-left: 0;
          margin-right: 4px;
        }
      }
    } 
  }
</style>