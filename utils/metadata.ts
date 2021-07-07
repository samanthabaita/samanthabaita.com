export default (payload: {title: string, description: string, image: string, url: string}) => {
  const meta = []

  meta.push({
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary'
  }, {
    hid: 'og:type',
    property: 'og:type',
    content: 'website'
  })

  if (payload.title && payload.title !== '') {
    meta.push({
      hid: 'title',
      name: 'title',
      content: payload.title
    }, {
      hid: 'og:title',
      property: 'og:title',
      content: payload.title
    }, {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: payload.title
    })
  }

  if (payload.description && payload.description !== '') {
    meta.push({
      hid: 'description',
      name: 'description',
      content: payload.description
    }, {
      hid: 'og:description',
      property: 'og:description',
      content: payload.description
    }, {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: payload.description
    })
  }

  if (payload.image && payload.image !== '') {
    meta.push({
      hid: 'image',
      name: 'image',
      content: payload.image
    }, {
      hid: 'og:image',
      property: 'og:image',
      content: payload.image
    }, {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: payload.image
    })
  }

  if (payload.url && payload.url !== '') {
    meta.push({
      hid: 'url',
      name: 'url',
      content: payload.url
    }, {
      hid: 'og:url',
      property: 'og:url',
      content: payload.url
    })
  }

  return meta
}