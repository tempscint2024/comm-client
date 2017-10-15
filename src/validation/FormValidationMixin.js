/**
 * Created by winner on 10/8/17.
 */
export const formsValidation = {
  data () {
    return {
      firstNameRule: [
        (v) => !!v || 'Your First name is required',
        (v) => /^[a-zA-Z'-]{2,16}$/.test(v) || 'First name must be valid'
      ],
      lastNameRule: [
        (v) => !!v || 'Your Last name is required',
        (v) => /^[a-zA-Z'-]{2,16}$/.test(v) || 'Last name must be valid'
      ],
      emailRule: [
        (v) => !!v || 'Email is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRule: [
        (v) => !!v || 'Password is required',
        (v) => /^([a-zA-Z0-9@*#]{8,15})$/.test(v) || 'Password must be valid'
      ],
      passwordConfirmationRule: [
        (v) => !!v || 'Confirmation is required',
        (v) => this.retypePassword === this.password || 'Password must match'
      ],
      // for phone number
      mobileRule: [
        (v) => !!v || 'Phone number is required',
        (v) => /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(v) || 'Phone number must be valid'
      ]

    }
  }

}
