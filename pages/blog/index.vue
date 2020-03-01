<template>
    <div class="page-blog">
        <div class="site-container-blog">
            <div class="post-list">
                <div class="post-item" v-for="p in entries" :key="p._id">
                    <h2 class="post-title">
                        <nuxt-link :to="{ name: 'blog-slug___en', params: { slug: p.title_slug } }">{{ p.title }}</nuxt-link>
                    </h2>
                    <div class="post-metas">
                        <div class="post-created">{{ p.created }}</div>
                        <div class="post-tag" v-if="p.tags">in {{ p.tags }}</div>
                    </div>
                    <div class="post-excerpt">{{ p.excerpt }}</div>
                    <nuxt-link :to="{ name: 'blog-slug___en', params: { slug: p.title_slug } }" class="read-more" append>
                        Read more
                        <span class="arrow-icon">
                            <svg x="0px" y="0px" viewBox="0 0 476.213 476.213" xml:space="preserve"> <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                        </span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData ( params ) {
        var result = await axios( {
            method: 'post',
            url: `http://159.89.196.91:8686/api/collections/get/post`,
            headers: { 'Cockpit-Token': 'account-98e2e93440557872026df4a4a6ab36' },
            data: {
                filter: { published:true },
                limit: 10,
                sort: { _created: -1 }
            },
        } )

        return {
            blog_entries: result.data.entries,
        }
    },
    computed: {
        entries () {
           return this.blog_entries.map( ( item ) => {

               item.tags = ( typeof item.tags == 'string' ) ? item.tags : Object.values( item.tags ).join(', ');
               item.excerpt += '...';
               return item;
           } )
        }
    }
}
</script>
