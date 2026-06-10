// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.itinerateconsulting.com',
  integrations: [sitemap({
    filter: (page) => page === 'https://www.itinerateconsulting.com/',
  })],
  compressHTML: true,
})
