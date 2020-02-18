<template>
    <div class="contact-form-block">
        <h2 v-if="title">{{ title }}</h2>
        <p v-if="subTitle">{{ subTitle }}</p>
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit">

            <a-form-item>
                <a-input
                    v-decorator="[
                        'fullName',
                        { rules: [{ required: true, message: 'Please input your fullname!' }] },
                    ]"
                    placeholder="Full name">
                </a-input>
            </a-form-item>

            <a-form-item>
                <a-input
                    v-decorator="[
                        'email',
                        { rules: [{ required: true, message: 'Please input your email!' }] },
                        { rules: [{ type: 'email', message: 'The input is not valid E-mail!' }] },
                    ]"
                    placeholder="Email address">
                </a-input>
            </a-form-item> 

            <a-form-item>
                <a-textarea
                    v-decorator="[
                        'content',
                        { rules: [{ required: true, message: 'Please input your message!' }] },
                    ]"
                    placeholder="Message">
                </a-textarea>
            </a-form-item> 

            <a-button html-type="submit" class="button button-full">Send Message</a-button>

        </a-form>
    </div>
</template>

<script>
export default {
    props: ['title','subTitle'],
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'contact_form' });
    },    
    methods: {
        handleSubmit() {

        }
    }
}
</script>