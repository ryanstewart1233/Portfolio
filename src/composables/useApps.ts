import { apps } from '@/data/apps'
import type { AppData } from '@/data/apps'

export function useApps() {
  function getAppBySlug(slug: string): AppData | undefined {
    return apps.find((app) => app.slug === slug)
  }

  function getAppsByCategory(category: string): AppData[] {
    return apps.filter((app) => app.category === category)
  }

  return { apps, getAppBySlug, getAppsByCategory }
}
