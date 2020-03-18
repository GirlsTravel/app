const authRoute = '/auth/signup'

export default function(context) {
  const isAuth = context.store.getters['auth/isAuthUser']
  if (!isAuth) return context.redirect(authRoute)
}
