<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm12 md8 offset-md2>
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

                    <v-form v-model="valid" ref="form1" lazy-validation>
                        <v-layout wrap>
                            <v-flex xs12 sm12 md6 class="pr-2">
                                <!--Firstname field-->
                                <v-text-field
                                        label="First Name"
                                        v-model="firstName"
                                        :rules="firstNameRule"
                                        required
                                >
                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md6 class="" >
                                <!--Lastname field-->
                                <v-text-field
                                        label="Last Name"
                                        v-model="lastName"
                                        :rules="lastNameRule"
                                        required
                                >
                                </v-text-field>
                            </v-flex>
                        </v-layout>


                        <!--Gender field-->
                        <v-layout class="">
                            <v-radio-group v-model="gender"
                                           row
                                           label="Gender"
                            >
                                <v-radio label="Male"
                                         value="Male"
                                         color="primary"
                                ></v-radio>
                                <v-radio label="Female"
                                         value="Female"
                                         color="primary"
                                ></v-radio>
                            </v-radio-group>
                        </v-layout>

                        <!--BirthDay field-->
                        <v-dialog
                                persistent
                                v-model="modal"
                                lazy
                                full-width

                        >

                                <v-text-field
                                        slot="activator"
                                        label="Date of birth"
                                        v-model="dateOfBirth"
                                        readonly
                                ></v-text-field>


                            <v-date-picker v-model="dateOfBirth" scrollable >
                                <template scope="{ save, cancel }">
                                    <v-card-actions>
                                        <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                                        <v-btn flat primary @click.native="save()">Save</v-btn>
                                    </v-card-actions>
                                </template>
                            </v-date-picker>
                        </v-dialog>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md6 class="pr-2">
                                <!--Email field-->
                                <v-text-field
                                        label="Email"
                                        v-model="email"
                                        required
                                        type="email"
                                        :rules="emailRule"
                                >
                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6 class="">
                                <!--Mobile field-->
                                <v-text-field
                                        label="Mobile"
                                        v-model="mobile"
                                        required
                                        :rules="mobileRule"
                                >
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout wrap>
                            <v-flex xs12 sm12 md6 class="pr-2">
                                <!--Password field-->
                                <v-text-field
                                        label="Password"
                                        v-model="password"
                                        hint="At least 8 characters"
                                        :rules="passwordRule"
                                        min="8"
                                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (e1 = !e1)"
                                        :type="e1 ? 'password' : 'text'"
                                >
                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md6 class="">
                                <!--retype password field-->
                                <v-text-field
                                        label="Re-type Password"
                                        v-model="retypePassword"
                                        :rules="passwordConfirmationRule"
                                        :type="e1 ? 'password' : 'text'"
                                >
                                </v-text-field>
                            </v-flex>
                        </v-layout>



                        <v-layout>
                            <v-spacer></v-spacer>
                            <v-btn class="pr-2 pl-2"
                            >Cancel</v-btn>
                            <v-btn @click="signup"
                                   dark
                                   class="indigo pr-2 pl-2"
                            >Save</v-btn>
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
          mainTitle: 'Customer registration',
          valid: true,
          firstName: '',
          lastName: '',
          gender: 'Male',
          modal: '',
          dateOfBirth: '',
          email: '',
          mobile: '',
          password: '',
          retypePassword: '',
          e1: true
        }
      },
      methods: {
        signup () {
          if (this.$refs.form1.validate()) { // Native form submission is not yet supported
          }
        }
      }
    }
</script>
