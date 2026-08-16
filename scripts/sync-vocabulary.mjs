import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const sourcePath = resolve('data/klamath-modoc-vocabulary.json')
const targetPath = resolve('src/vocabulary.ts')

const run = async () => {
  const raw = await readFile(sourcePath, 'utf8')
  const parsed = JSON.parse(raw)

  if (!Array.isArray(parsed)) {
    throw new Error('Vocabulary JSON must be an array of entries.')
  }

  const hasInvalidEntry = parsed.some((entry) => {
    return (
      typeof entry !== 'object' ||
      entry === null ||
      typeof entry.category !== 'string' ||
      typeof entry.klamath !== 'string' ||
      typeof entry.english !== 'string'
    )
  })

  if (hasInvalidEntry) {
    throw new Error('Each entry must have string fields: category, klamath, english.')
  }

  const content = [
    'export type VocabularyEntry = {',
    '  category: string',
    '  klamath: string',
    '  english: string',
    '}',
    '',
    `export const vocabulary: VocabularyEntry[] = ${JSON.stringify(parsed, null, 2)}`,
    '',
  ].join('\n')

  await writeFile(targetPath, content, 'utf8')
  console.log(`Synced ${parsed.length} entries to src/vocabulary.ts`)
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
})
