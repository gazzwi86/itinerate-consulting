/**
 * Syncs Blog posts from Notion to src/content/posts/.
 *
 * Usage:
 *   NOTION_TOKEN=secret_xxx npx tsx scripts/sync-from-notion.ts
 *   Add --force to overwrite existing stubs.
 *
 * Notion DB: 26ac84b2-a9b4-8039-aeca-000b8a748e85
 * Filters for: Note Type = Blog, Status = Published
 */

import { Client } from '@notionhq/client'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const NOTION_DB_ID = '26ac84b2-a9b4-8039-aeca-000b8a748e85'
const POSTS_DIR = join(process.cwd(), 'src/content/posts')
const FORCE = process.argv.includes('--force')

const notion = new Client({ auth: process.env.NOTION_TOKEN })

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function getProp(page: any, name: string): any {
  return page.properties[name]
}

function getRichText(prop: any): string {
  return prop?.rich_text?.map((t: any) => t.plain_text).join('') ?? ''
}

function getTitle(prop: any): string {
  return prop?.title?.map((t: any) => t.plain_text).join('') ?? ''
}

function getSelect(prop: any): string {
  return prop?.select?.name ?? ''
}

function getUrl(prop: any): string {
  return prop?.url ?? ''
}

function getDate(prop: any): string {
  return prop?.date?.start ?? new Date().toISOString().split('T')[0]
}

async function main() {
  if (!process.env.NOTION_TOKEN) {
    console.error('Error: NOTION_TOKEN env var is required')
    process.exit(1)
  }

  console.log('Querying Notion database...')

  const response = await notion.databases.query({
    database_id: NOTION_DB_ID,
    filter: {
      and: [
        { property: 'Note Type', select: { equals: 'Blog' } },
        { property: 'Status', select: { equals: 'Published' } },
      ],
    },
    sorts: [{ property: 'Date', direction: 'descending' }],
  })

  console.log(`Found ${response.results.length} published blog post(s)`)
  mkdirSync(POSTS_DIR, { recursive: true })

  let created = 0
  let skipped = 0

  for (const page of response.results as any[]) {
    const title = getTitle(getProp(page, 'Name') ?? getProp(page, 'Title'))
    const summary = getRichText(getProp(page, 'Summary'))
    const canonicalUrl = getUrl(getProp(page, 'Canonical URL') ?? getProp(page, 'URL'))
    const platform = getSelect(getProp(page, 'Platform')) || 'Substack'
    const date = getDate(getProp(page, 'Date') ?? getProp(page, 'Published'))

    if (!title) { console.warn('Skipping page with no title:', page.id); continue }
    if (!canonicalUrl) { console.warn(`Skipping "${title}": no Canonical URL`); continue }

    const slug = slugify(title)
    const filePath = join(POSTS_DIR, `${slug}.md`)

    if (existsSync(filePath) && !FORCE) {
      console.log(`  skip  ${slug}.md (already exists, use --force to overwrite)`)
      skipped++
      continue
    }

    const summaryText = summary
      || `[TODO: Add a 2-3 sentence summary of "${title}" before publishing]`

    const content = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `date: ${date}`,
      `summary: "${summaryText.replace(/"/g, '\\"')}"`,
      `canonicalUrl: "${canonicalUrl}"`,
      `platform: ${platform}`,
      `tags: []`,
      '---',
      '',
    ].join('\n')

    writeFileSync(filePath, content, 'utf8')
    console.log(`  wrote ${slug}.md`)
    created++
  }

  console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`)
  if (created > 0) {
    console.log('\nNext steps:')
    console.log('  1. Review the generated stubs in src/content/posts/')
    console.log('  2. Fill in or review the summary field for each post')
    console.log('  3. Run: npm run build')
  }
}

main().catch(err => {
  console.error('Sync failed:', err.message)
  process.exit(1)
})
