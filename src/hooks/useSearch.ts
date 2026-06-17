import { useMemo } from 'react'
import { useTopics, useCategories } from '@/i18n/hooks'
import type { Topic } from '@/types'

export interface SearchHit {
  topic: Topic
  categoryTitle: string
  categoryColor: string
  matchedIn: 'title' | 'description' | 'step'
  matchedHeading?: string
}

export function useSearch(query: string): SearchHit[] {
  const topics = useTopics()
  const categories = useCategories()

  return useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []

    const hits: SearchHit[] = []
    const seen = new Set<string>()

    for (const topic of topics) {
      if (seen.has(topic.id)) continue
      const cat = categories.find(c => c.id === topic.category)
      const categoryTitle = cat?.title ?? ''
      const categoryColor = cat?.color ?? '#818cf8'

      if (topic.title.toLowerCase().includes(q)) {
        hits.push({ topic, categoryTitle, categoryColor, matchedIn: 'title' })
        seen.add(topic.id)
        continue
      }
      if (topic.description.toLowerCase().includes(q)) {
        hits.push({ topic, categoryTitle, categoryColor, matchedIn: 'description' })
        seen.add(topic.id)
        continue
      }

      // Search step headings in the explanation section
      for (const section of topic.sections) {
        if (section.type !== 'explanation') continue
        for (const step of section.steps) {
          if (step.heading.toLowerCase().includes(q)) {
            hits.push({ topic, categoryTitle, categoryColor, matchedIn: 'step', matchedHeading: step.heading })
            seen.add(topic.id)
            break
          }
        }
        if (seen.has(topic.id)) break
      }
    }

    return hits.slice(0, 10)
  }, [query, topics, categories])
}
