import slugify from 'slugify'

/**
 * Makes a string URL friendly
 * @see https://github.com/simov/slugify
 */
export const slugifyString = (string) =>
  slugify(string, {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: true
  })
