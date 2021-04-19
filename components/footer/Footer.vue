<template>
    <footer id="site-footer" class="main-footer">
        <div class="site-container">
            <div class="cta-content">
                <div class="cta-background-layer" :style="`background: url(${require('~/assets/images/cta-banner.jpg')}) no-repeat center center / cover, #222;`"></div>
                <div class="cta-inner">
                    <div class="entry">
                        <h3>Let us know your ideas</h3>
                        <p>And we will start your project today!</p>
                    </div>
                    <div class="action">
                        <a href="#" class="button">Get Started</a>
                    </div>
                </div>
            </div>

            <a-row>
                <a-col :md="4" :sm="12" :xs="24">
                    <div class="footer-block-item">
                        <h4 class="f-title">Company</h4>
                        <ul>
                            <li v-for="footer_com_nav in footer_company_navs" :key="footer_com_nav.title">
                                <a :href="footer_com_nav.url">{{ footer_com_nav.title }}</a>
                            </li>
                        </ul>
                    </div>
                </a-col>
                <a-col :md="8" :sm="12" :xs="24">
                    <div class="footer-block-item">
                        <h4 class="f-title">Products</h4>
                        <ul>
                            <li v-for="footer_product_nav in footer_product_navs" :key="footer_product_nav.title">
                                <a :href="footer_product_nav.url">{{ footer_product_nav.title }}</a>
                            </li>
                        </ul>
                    </div>
                </a-col>
                <a-col :md="12" :sm="24">
                    <div class="footer-block-item block-newsletter">
                        <h4 class="f-title">Subscribe</h4>
                        <p>Subscribe to our newsletter & stay updated.</p>
                        <a-form layout="inline" :form="form">
                            <a-form-item>
                                <a-input
                                class="email-field"
                                v-decorator="[
                                    'email',
                                    { rules:
                                        [
                                            { type: 'email', message: 'The input is not valid E-mail!' },
                                            { required: true, message: 'Please input your E-mail!' },
                                        ]
                                    }
                                ]"
                                placeholder="Email">
                                    <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)" />
                                </a-input>
                            </a-form-item>

                            <a-form-item>
                                <a-button type="primary" html-type="submit">Submit</a-button>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-col>
            </a-row>

            <div class="footer-copyright">
                <a-row>
                    <a-col :md="12" :sm="12" :xs="24">
                        <div>© 2020 Beplus, LLC. All rights reserved.</div>
                    </a-col>
                    <a-col :md="12" :sm="12" :xs="24">
                        <div class="connect-social-content">
                            <a-icon type="facebook" />
                            <a-icon type="linkedin" />
                            <a-icon type="behance-square" />
                            <a-icon type="youtube" />
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
        <OffcanvasMenu />
    </footer>
</template>

<script>
import OffcanvasMenu from '~/components/header/OffcanvasMenu.vue'

export default {
    data() {
        return {
            footer_company_navs: [
                {title: 'About', url: ''},
                {title: 'Blog', url: ''},
                {title: 'Careers', url: ''},
                {title: 'Partners', url: ''},
                {title: 'Legal & Security', url: ''},
            ],
            footer_product_navs: [
                {title: 'Alone Nonprofit & Charity WP Theme', url: ''},
                {title: 'Asata Digital & Marketing Agency WP Theme', url: ''},
                {title: 'Lemon Spa & Beauty WP Theme', url: ''},
                {title: 'Ametex Digital Marketing & Seo WP Theme', url: ''},
                {title: 'Educlever Education WP Theme', url: ''},
                // {title: 'Jayla WooCommerce, Shop WP Theme', url: ''},
                // {title: 'Dana Corporate Business WP Theme', url: ''},
                // {title: 'Excitor Business Consulting WP Theme', url: ''},
            ],
            form: this.$form.createForm(this, { name: 'newsletter' }),
        }
    },
    components: {
        OffcanvasMenu
    },
}
</script>
