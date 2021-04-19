<template>
  <ESection class="ss-team">
    <div class="site-container">
      <h3 class="ss-title">Our Team</h3>
      <div class="members" v-if="membersData.length">
        <div class="member-item" v-for="member in membersData" :key="member.node.id">
          <div class="member-item__avatar">
            <img :src="memberAvatar( member.node.featuredImage )" />
          </div>
          <div class="member-item__entry">
            <h4 class="member-item__name">{{ member.node.title }}</h4>
            <div class="member-item__desciption" v-html="member.node.content"></div>
          </div>
        </div>
      </div>
    </div>
  </ESection>
</template>

<script>
import ESection from '~/components/elements/e-section.vue'
export default {
  components: { ESection },
  props: [ 'members' ],
  data() {
    return {
    }
  },
  computed: {
    membersData () {
      if( this.members?.teams?.edges ) {
        return this.members?.teams?.edges
      } else {
        return []
      }
    }
  },
  methods: {
    memberAvatar ( featuredImage ) {
      if( ! featuredImage ) {
        return 'https://ptibogxiv.net/wp-content/plugins/doliconnect/images/default.jpg'
      }

      return featuredImage.node.sourceUrl
    }
  }
}
</script>

<style lang="scss">
.ss-team {
  
  .members {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    
    .member-item {
      width: calc(100% / 4);
      padding: 0 15px;
      margin-bottom: 30px;

      @media(max-width: 768px) {
        width: calc(100% / 3);
      }

      @media(max-width: 600px) {
        width: calc(100% / 2);
      }

      @media(max-width: 375px) {
        width: calc(100% / 1);
        display: flex;
        align-items: center;

        &__avatar { 
          margin-right: 20px;
        }
      }

      &__avatar {
        margin-bottom: 20px;

        img {
          width: 100%;
          border-radius: 150px;
          width: 100px;
          padding: 5px;
          box-shadow: 10px 10px 13px 0 rgba(33, 31, 31, .1);
        }
      }

      &__name {
        font-size: 1.2em;
      }

      &__desciption {
        font-size: 14px;
        line-height: 1.5em;
      }
    }
  }
}
</style>