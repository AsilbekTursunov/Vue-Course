<script>
import axios from '../service/axios'

export default {
  name: 'Register',
  data() {
    return {
      isLoading: false,
      errorMessage: '',
      form: {
        username: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async submitForm(e) {
      e.preventDefault()
      if (!this.form.username || !this.form.email || !this.form.password) {
        this.errorMessage = 'All fields are required'
        setTimeout(() => {
          this.errorMessage = ''
        }, 2000)
      } else {
        this.isLoading = true
        this.errorMessage = ''
        try {
          const response = await axios.post('/auth/register', { ...this.form })
          if (response) {
            console.log('response', response)
            this.$router.push({ name: 'home' })
          }
        } catch (error) {
          this.errorMessage = error?.response?.data?.message
        } finally {
          this.isLoading = false
        }
      }
    },
    onChange(e, label) {
      this.form[label] = e.target.value
    },
  },
}
</script>
<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="bg-white w-2/4 m-auto rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10"
      >
        <h2 class="text-gray-900 text-2xl mb-1 text-center font-medium title-font">Register</h2>
        <p
          v-if="errorMessage"
          class="text-base bg-red-200 p-3 rounded-md border-red-800 text-red-600 text-center"
          >{{ errorMessage }}</p
        >
        <form class="mt-4">
          <Input :label="'username'" :type="'text'" :onChange="onChange" :parentClass="''" />
          <Input :label="'email'" :type="'email'" :onChange="onChange" />
          <Input :label="'password'" :type="'password'" :onChange="onChange" />

          <button
            type="submit"
            :disabled="isLoading"
            @click="submitForm"
            class="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >Button</button
          >
        </form>
        <p class="text-base text-gray-800 mt-3 text-center"
          >Have already an Account
          <router-link class="text-blue-700 hover:underline" :to="{ name: 'login' }"
            >Sign in</router-link
          >
        </p>
      </div>
    </div>
  </section>
</template>

<style></style>
