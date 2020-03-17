<template>
    <div class="offcanvas-menu-content">
        <div class="offcanvas-inner">
            <div class="__close" @click="close_offcanvas_menu">
                <span class="icon-close">
                    <svg x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"> <g> <g> <path d="M0,0v512h512V0H0z M327.115,365.904L256,294.789l-71.115,71.115l-38.789-38.789L217.211,256l-71.115-71.115l38.789-38.789 L256,217.211l71.115-71.115l38.789,38.789L294.789,256l71.115,71.115L327.115,365.904z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                </span>
                Close
            </div>
            <!-- <div class="offcanvas-brand">
                <Brand />
            </div> -->
            <div class="offcanvas-menu">
                <Navigation class="mobile-menu" />
            </div>
            <div class="offcanvas-widget">
                <div class="wg wg-contact">
                    <h4 class="wg-title">Have any questions?</h4>
                    <p>Get in touch and find out how we can help your business.</p>
                    <a href="#" class="button">Contact us</a>
                </div>
            </div>
        </div>
    </div>
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
        close_offcanvas_menu () {
            this.$store.commit( 'body_remove_class', '__is-offcanvas-menu-actived' )
        }
    }
}
</script>