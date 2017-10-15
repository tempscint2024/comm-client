<template>
    <v-container>
        <v-layout wrap>
            <v-flex  xs12 sm12 md8 offset-md2>
                <v-card class="pr-4 pt-3 pl-4 pb-2">
                    <v-container>
                        <v-layout>
                            <v-flex xs12 class="text-xs-center text-md-center text-sm-center">
                                <v-layout wrap justify-space-around>
                                    <v-avatar class="indigo">
                                        <v-icon dark>account_circle</v-icon>
                                    </v-avatar>
                                </v-layout>
                                <span class="title">{{mainTitle}}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-form v-model="valid" ref="form" lazy-validation>
                        <v-layout wrap>
                            <v-flex xs12>
                                <!--Email field- -->
                                <v-text-field
                                        label="Email"
                                        v-model="email"
                                        :rules="emailRule"
                                        required
                                        type="email"
                                        prepend-icon="email"
                                >
                                </v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <!--Password field-->
                                <v-text-field
                                        label="Password"
                                        v-model="password"
                                        hint="At least 8 characters"
                                        min="8"
                                        :rules="passwordRule"
                                        required
                                        prepend-icon="lock"
                                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (e1 = !e1)"
                                        :type="e1 ? 'password' : 'text'"

                                >
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex xs12 sm12 md6>
                                <span class="indigo--text body-2 pl-1"
                                      style="cursor: pointer"
                                      @click=""
                                >Forgot my password.</span>
                            </v-flex>
                            <v-flex xs12 sm12 md6 class="text-xs-center text-sm-right text-md-right">
                                <v-btn @click.submit.prevent="signin"
                                       dark
                                       block
                                       class="indigo hidden-md-and-up pr-5 pl-5"
                                >Sign in
                                </v-btn>
                                <v-btn class="indigo hidden-sm-and-down"
                                       @click.submit.prevent="signin"
                                       dark
                                >Sign in
                                    <v-icon right>arrow_forward</v-icon>

                                </v-btn>
                            </v-flex>

                        </v-layout>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {formsValidation} from '../../validation/FormValidationMixin'
    export default {
      mixins: [formsValidation],
      data () {
        return {
          valid: true,
          email: '',
          password: '',
          mainTitle: 'Sign in form',
          e1: true
        }
      },
      methods: {
        signin () {
          if (this.$refs.form.validate()) { // Native form submission is not yet supported
          }
        }
      }
    }
</script>
