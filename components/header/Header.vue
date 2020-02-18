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
                        <li>
                            <nuxt-link to="register" class="button">{{ $t('register') }}</nuxt-link>
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
    }
}
</script>
