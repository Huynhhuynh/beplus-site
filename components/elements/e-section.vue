<template>
    <section class="ss-block" :style="`background-color: ${backgroundColor}`">
        <div v-if="backgroundImg" class="background-layer" :style="`background: url(${backgroundImg}) no-repeat center center / cover;`"></div>
        <div class="ss-inner" :style="inner_css">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: ['padding', 'margin', 'backgroundColor', 'backgroundImg'],
    computed: {
        inner_css () {
            var css = {};
            if( this.padding ) css.padding = this.padding;
            if( this.margin ) css.margin = this.margin;

            return css; 
        }
    },
}
</script>