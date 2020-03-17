<template>
    <header id="site-header" class="main-header">
        <div class="header-top">
            <div class="site-container">
                <div class="header-top--menu">
                    <ul class="menu">
                        <li class="upcoming-item">
                            <span class="__tag">Upcoming Tutorial</span>
                            <a href="#">Video tutorial how to setup new WordPress eCommerce website</a>
                        </li>
                        <li class="item">
                            <a href="#">Docs</a>
                        </li>
                        <li class="item">
                            <a href="#">Get Support</a>
                        </li>
                        <li class="item">
                            <a href="#">Sales</a>
                        </li>
                        <li class="item">
                            <a href="#">Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="site-container">
            <div class="header-content">
                <Brand />
                <Navigation />
                <div class="site-tools">
                    <ul>
                        <li class="register-button">
                            <nuxt-link to="register" class="button">{{ $t('register') }}</nuxt-link>
                        </li>
                        <li class="menu-mobile-button">
                            <span class="button-menu-offcanvas-toggle" @click="open_offcanvas_menu">
                                <svg x="0px" y="0px" viewBox="0 0 341.333 341.333" xml:space="preserve"> <g> <g> <g> <rect x="128" y="128" width="85.333" height="85.333"/> <rect x="0" y="0" width="85.333" height="85.333"/> <rect x="128" y="256" width="85.333" height="85.333"/> <rect x="0" y="128" width="85.333" height="85.333"/> <rect x="0" y="256" width="85.333" height="85.333"/> <rect x="256" y="0" width="85.333" height="85.333"/> <rect x="128" y="0" width="85.333" height="85.333"/> <rect x="256" y="128" width="85.333" height="85.333"/> <rect x="256" y="256" width="85.333" height="85.333"/> </g> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Brand from '~/components/header/Brand.vue'
import Navigation from '~/components/header/Navigation.vue'

export default {
    components: {
       Brand,
       Navigation
    },
    methods: {
        open_offcanvas_menu () {
            this.$store.commit( 'body_add_class', '__is-offcanvas-menu-actived' )
        }
    }
}
</script>
