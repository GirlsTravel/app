import shortId from 'shortid'

/**
 * Generates non-sequential url-friendly unique id.
 * @see https://github.com/dylang/shortid
 */
export const generateShortId = () => shortId.generate()
