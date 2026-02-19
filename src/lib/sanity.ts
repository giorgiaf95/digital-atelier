import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Client normale (solo dati pubblicati)
export const client = createClient({
  projectId: 'eer4q4zc',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-16',
})

// Client per preview (include bozze)
export const previewClient = createClient({
  projectId: 'eer4q4zc',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-16',
  token: import.meta.env.VITE_SANITY_TOKEN || '',
  perspective: 'previewDrafts',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}

// Funzione helper per scegliere il client giusto
export const getClient = (preview = false) => {
  if (!preview || !import.meta.env.VITE_SANITY_TOKEN) {
    return client
  }
  return previewClient
}
