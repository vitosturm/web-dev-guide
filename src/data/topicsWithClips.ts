import enTopicsHtml from '@/i18n/locales/en/topics-html.json'
import enTopicsCss from '@/i18n/locales/en/topics-css.json'
import enTopicsJs from '@/i18n/locales/en/topics-js.json'
import enTopicsOther from '@/i18n/locales/en/topics-other.json'

type StepLike = { videoClip?: string }
type TopicLike = { steps?: StepLike[] }
type NamespaceJson = Record<string, TopicLike>

const NS: NamespaceJson[] = [
  enTopicsHtml as NamespaceJson,
  enTopicsCss as NamespaceJson,
  enTopicsJs as NamespaceJson,
  enTopicsOther as NamespaceJson,
]

function build(): Set<string> {
  const s = new Set<string>()
  for (const ns of NS) {
    for (const [topicId, topic] of Object.entries(ns)) {
      if (topic?.steps?.some(step => step?.videoClip)) s.add(topicId)
    }
  }
  return s
}

export const TOPICS_WITH_CLIPS: ReadonlySet<string> = build()

export function hasClip(topicId: string): boolean {
  return TOPICS_WITH_CLIPS.has(topicId)
}
