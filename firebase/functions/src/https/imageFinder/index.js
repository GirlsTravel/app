import * as functions from 'firebase-functions'
import Unsplash, { toJson } from 'unsplash-js'
import fetch from 'node-fetch'

/** unsplash-js library depends on fetch */
global.fetch = fetch

/**
 * Get a list of photos matching the keyword
 * @param {string} query - Query keywords used for search
 * @see https://github.com/unsplash/unsplash-js#search
 */
const searchImage = async (query) => {
  const unsplash = new Unsplash({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    secret: process.env.UNSPLASH_SECRET_KEY
  })

  const photos = await unsplash.search.photos(query)
  const photosJson = await toJson(photos)
  console.log('photos: ', photos)
  console.log('photosJson: ', photosJson)
  return photosJson
}


export const imageFinder = functions.https.onCall(async ({ query }, { auth }) => {
  try {
    const uid = auth?.uid
    console.log('query: ', query)
    console.log('uid: ', uid)
    if (!query) throw new Error('Query are missing.')
    if (!uid) throw new Error('User is not authorized.')
    return await searchImage(query)
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'Invalid email address.'
    )
  }
})
