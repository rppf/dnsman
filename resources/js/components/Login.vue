<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Login</h3>
                    <p class="subtitle has-text-grey">Please login to proceed</p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://placehold.it/128x128">
                        </figure>
                        <form>
                            <b-field>
                                <b-input placeholder="Email" size="is-medium" type="email" icon="email"></b-input>
                            </b-field>

                            <b-field>
                                <b-input type="password" placeholder="Password" size="is-medium" icon="key" password-reveal></b-input>
                            </b-field>

                            <div class="field">
                                <b-checkbox size="is-small">Remember Me</b-checkbox>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">
                                <b-icon icon="login"></b-icon>
                                <span>Login</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Login'
}
</script>
