import { auth } from '~/plugins/firebase'

export default {
  watchAuthState({ commit, dispatch }) {
    auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        commit('SET_AUTH_USER', { authUser })
        console.log('authUser: ', authUser)
        dispatch('users/fetchSelf', null, { root: true })
        dispatch('posts/watchPostMeta', null, { root: true })
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
        url: `${window.location.origin}/auth/verify`,
        handleCodeInApp: true
      }
      await auth().sendSignInLinkToEmail(email, actionCodeSettings)
      window.localStorage.setItem('emailForSignIn', email)
      console.log('sendSignInLinkToEmail')
    } catch (e) {
      console.error(e)
    }
  },

  async confirmSignIn(_, { email }) {
    try {
      const url = window.location.href
      console.log('confirmSignIn: ', url)
      console.log('email prop: ', email)
      if (auth().isSignInWithEmailLink(url)) {
        console.log('correct URL')
        const emailForSignIn =
          email || window.localStorage.getItem('emailForSignIn')
        console.log('emailForSignIn: ', emailForSignIn)
        // If missing email, prompt user for it
        if (!emailForSignIn) {
          throw new Error('Email is missing')
          // email = window.prompt('Please provide your email for confirmation')
        }

        // Signin user and remove the email localStorage
        const result = await auth().signInWithEmailLink(emailForSignIn, url)
        console.log('result: ', result)
        window.localStorage.removeItem('emailForSignIn')
        return result
      } else {
        console.error('incorrect URL')
        throw new Error('Incorrect URL')
      }
    } catch (err) {
      console.error(err)
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
