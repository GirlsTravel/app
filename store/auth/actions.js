import { auth } from '~/plugins/firebase'

export default {
  watchAuthState({ commit, dispatch }) {
    auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        commit('SET_AUTH_USER', { authUser })
        console.log('authUser: ', authUser)
        dispatch('users/fetchSelf', null, { root: true })
      } else {
        commit('DELETE_AUTH_USER')
        // dispatch('signInAnonymously')
      }
    })
  },

  async signInAnonymously() {
    try {
      await auth().signInAnonymously()
      console.log('signInAnonymously')
    } catch (e) {
      console.error(e)
    }
  },

  async sendSignInLinkToEmail(_, { email }) {
    try {
      const actionCodeSettings = {
        url: 'http://localhost:3000/auth/verify',
        handleCodeInApp: true
      }
      await auth().sendSignInLinkToEmail(email, actionCodeSettings)
      window.localStorage.setItem('emailForSignIn', email)
      console.log('sendSignInLinkToEmail')
    } catch (e) {
      console.error(e)
    }
  },

  async confirmSignIn() {
    try {
      const url = window.location.href
      console.log('confirmSignIn: ', url)
      if (auth().isSignInWithEmailLink(url)) {
        console.log('correct URL')
        const email = window.localStorage.getItem('emailForSignIn')
        console.log('email: ', email)
        console.log('email falsy: ', !email)

        // If missing email, prompt user for it
        if (!email) {
          console.log('email is missing!!')
          // email = window.prompt('Please provide your email for confirmation')
        }

        // Signin user and remove the email localStorage
        const result = await auth().signInWithEmailLink(email, url)
        console.log('result: ', result)
        window.localStorage.removeItem('emailForSignIn')
      }
      console.log('incorrect URL')
    } catch (err) {
      this.errorMessage = err.message
    }
  },

  async signOut() {
    try {
      await auth().signOut()
    } catch (e) {
      console.error(e)
    }
  }
}
