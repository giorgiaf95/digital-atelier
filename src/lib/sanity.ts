import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Client normale (solo dati pubblicati)
export const client = createClient({
  projectId: 'eer4q4zc',
  dataset: 'production',
  useCdn: false, // ⚠️ Cambiato da true a false per dati freschi
  apiVersion: '2024-02-16',
})

// Client per preview (include bozze) - Opzionale
export const previewClient = createClient({
  projectId: 'eer4q4zc',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-16',
  token: import.meta.env.VITE_SANITY_TOKEN || '', // Token opzionale
  perspective: 'previewDrafts',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}

// 🔥 Funzione helper richiesta da Modelli3D.tsx
export const getClient = (preview = false) => {
  // Se non c'è token o preview è false, usa client normale
  if (!preview || !import.meta.env.VITE_SANITY_TOKEN) {
    return client
  }
  return previewClient
}
