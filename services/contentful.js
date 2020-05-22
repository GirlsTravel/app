import { createClient } from 'contentful'
import { documentToHtmlString as DocumentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { round } from 'lodash'

/**
 * Initializing a client to return content
 * @see https://github.com/contentful/contentful.js#your-first-request
 */
export const contentful = createClient({
  space: 'tv4vg5z0nxeg',
  accessToken: 'nk7_nrMbc5OX9jo2Jo91ZFQK93-Fxw9jnLmdMw7nFPg' // preview accessToken: UJhjOR0RDbjcogkKkGeCJncEtQz9rsNwVigRcFoLTa8
})

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => `<span class='rich-text__bold'>${text}</span>`,
    [MARKS.ITALIC]: (text) => `<span class='rich-text__italic'>${text}</span>`,
    [MARKS.UNDERLINE]: (text) =>
      `<span class='rich-text__underline'>${text}</span>`,
    [MARKS.CODE]: (text) => `<span class='rich-text__code'>${text}</span>`
  },
  renderNode: {
    [BLOCKS.DOCUMENT]: (node, next) => console.log('node: ', node),
    [BLOCKS.HEADING_1]: (node, next) =>
      `<h1 class='rich-text__heading-1'>${next(node.content)}</h1>`,
    [BLOCKS.HEADING_2]: (node, next) =>
      `<h2 class='rich-text__heading-2'>${next(node.content)}</h2>`,
    [BLOCKS.HEADING_3]: (node, next) =>
      `<h3 class='rich-text__heading-3'>${next(node.content)}</h3>`,
    [BLOCKS.OL_LIST]: (node, next) =>
      `<ol class='rich-text__ol-list'>${next(node.content)}</ol>`,
    [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
      const file = node.data.target.fields.file
      const imageSrc = file.url
      const aspectRatio = round(
        file.details.image.height / file.details.image.width,
        2
      )
      return `<ImageElement
        src='${imageSrc}'
        :aspectRatio='${aspectRatio}'
        :maxHeight='600'
        class='rich-text__image'>
      </ImageElement>`
    }
  }
}

export const documentToHtmlString = (document) =>
  DocumentToHtmlString(document, options)
