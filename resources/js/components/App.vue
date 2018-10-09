<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">dnsman 👌</h1>
                <h2 class="subtitle">
                    A simple web-based DNS manager, built with <a href="https://laravel.com">Laravel</a> and <a href="https://vuejs.org">Vue.js</a>.
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        mounted() {
            this.$toast.open('Component was mounted.')
        }
    }
</script>
