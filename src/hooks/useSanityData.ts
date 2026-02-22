import { useQuery } from '@tanstack/react-query'
import { sanityClient } from '@/sanity/client'
import {
  SITE_SETTINGS_QUERY,
  HERO_QUERY,
  ABOUT_QUERY,
  PROJECTS_QUERY,
} from '@/sanity/queries'
import type { SiteSettings, HeroData, AboutData, Project } from '@/sanity/types'

export function useSiteSettings() {
  return useQuery<SiteSettings>({
    queryKey: ['siteSettings'],
    queryFn: () => sanityClient.fetch(SITE_SETTINGS_QUERY),
  })
}

export function useHeroData() {
  return useQuery<HeroData>({
    queryKey: ['hero'],
    queryFn: () => sanityClient.fetch(HERO_QUERY),
  })
}

export function useAboutData() {
  return useQuery<AboutData>({
    queryKey: ['about'],
    queryFn: () => sanityClient.fetch(ABOUT_QUERY),
  })
}

export function useProjectsData() {
  return useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () => sanityClient.fetch(PROJECTS_QUERY),
  })
}
