<template>
    <div class="site-navigation">
        <nav>
            <ul class="menu">
                <li><nuxt-link :to="localePath('index')">{{ $t('links.home') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/services')">{{ $t('links.services') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/about')">{{ $t('links.about') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/products')">{{ $t('links.products') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/blog')">{{ $t('links.blog') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('/pricing')">{{ $t('links.pricing') }}</nuxt-link></li>
                <li v-if="this.$i18n.locale !== 'vi'">
                    <nuxt-link :to="switchLocalePath('vi')">{{ $t('locales.vi') }}</nuxt-link>
                </li>
                <li v-if="this.$i18n.locale !== 'en'">
                    <nuxt-link :to="switchLocalePath('en')">{{ $t('locales.en') }}</nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>