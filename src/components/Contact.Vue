<template>
  <div class="center">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="Firstname"
                    label="First Name:"
                    label-for="Firstname">
        <b-form-input class="mb-2 mr-sm-2 mb-sm-0" id="Firstname"
                      type="text"
                      v-model="form.fname"
                      required
                      placeholder="Enter First name">
        </b-form-input>
      </b-form-group>
                <b-form-group id="Lastname"
                    label="Last Name:"
                    label-for="Lastname">
        <b-form-input class="mb-2 mr-sm-2 mb-sm-0" id="Lirstname"
                      type="text"
                      v-model="form.lname"
                      required
                      placeholder="Enter Last name">
        </b-form-input>
      </b-form-group>

       <b-form-group id="email"
                    label="Email Address"
                    label-for="email">
        <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      placeholder="Enter Email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="phone"
                    label="Phone Number"
                    label-for="phone">
        <b-form-input id="phone"
                      type="phone"
                      v-model="form.phone"
                      placeholder="Enter Phone">
        </b-form-input>
      </b-form-group>
         <b-form-group id="message"
                    label="Email Your Message:"
                    label-for="message">
        <b-form-textarea id="message"
        height:500
                      type="message"
                      v-model="form.message"
                      placeholder="Enter Message">
        </b-form-textarea>
      </b-form-group>

      <b-button type="submit"  variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        fname: '',
        lname: '',
        phone: '',
        message: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.fname = ''
      this.form.lname = ''
      this.form.phone = ''
      this.form.message = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>

<style>
.center {
  padding:50px;
}

</style>
