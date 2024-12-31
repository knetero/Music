import React from 'react'
import fs from 'fs'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
})

// Create a function to process the markdown content
async function processMarkdown(content: string) {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content)

  return processedContent.toString()
}

// Make the component async and move the data fetching inside
export default async function PrivacyPolicy() {
  // Read and process the markdown file
  const filePath = path.join(process.cwd(), 'privacy-policy.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const content = await processMarkdown(fileContent)

  return (
    <div className={`${nunito.className} bg-black text-white min-h-screen`}>
      <div className="max-w-4xl mx-auto py-16 px-4 pt-40">
        <h1 className="text-4xl font-bold mb-8 text-[#fa4c38]">Privacy Policy</h1>
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}