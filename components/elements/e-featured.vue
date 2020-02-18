<template>
    <div class="featured-block featured-item-content">
        <div class="f-inner">
            <h4>{{ name }}</h4>
            <div class="icon" v-html="icon"></div>
            <div class="entry">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['icon', 'name']
}
</script>