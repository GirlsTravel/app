import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

/**
 * Learn more about Cloudinary transformations here.
 * @see https://cloudinary.com/documentation/image_transformation_reference
 */

const config = {
  observer: true,
  observerOptions: {
    rootMargin: '400px',
    threshold: 0.1
  },
  filter: {
    userProfile(listener) {
      const isUserProfile = /user_profile_photo/
      if (!isUserProfile.test(listener.src)) return
      listener.src = listener.src.replace(
        '/upload/',
        '/upload/w_160,h_160,c_fill,g_face,r_max/'
      )
    }
  }
}

Vue.use(VueLazyload, config)
