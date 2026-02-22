import { createClient } from '@sanity/client'

const token = import.meta.env.VITE_SANITY_TOKEN

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  token,
  // CDN doesn't forward auth tokens — disable it when dataset is private
  useCdn: !token,
  apiVersion: '2024-01-01',
  perspective: 'published',
})
