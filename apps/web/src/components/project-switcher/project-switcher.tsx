'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { getProjects } from '@/http/get-projects'

import { DropdownMenu } from '../ui/dropdown-menu'
import { ProjectSwitcherMenu } from './project-switcher-menu'
import { ProjectSwitcherTrigger } from './project-switcher-trigger'

export function ProjectSwitcher() {
  const { slug: organizationSlug, project: projectSlug } = useParams<{
    slug: string
    project: string
  }>()

  const { data: projectsResponse, isLoading: isLoadingProjects } = useQuery({
    queryKey: [organizationSlug, 'projects'],
    queryFn: () => getProjects(organizationSlug),
    enabled: !!organizationSlug,
  })

  const projects = projectsResponse?.projects || []

  const currentProject = projectSlug
    ? projects.find((project) => project.slug === projectSlug)
    : null

  return (
    <DropdownMenu>
      <ProjectSwitcherTrigger
        isLoadingProjects={isLoadingProjects}
        currentProject={currentProject}
      />

      <ProjectSwitcherMenu
        projects={projects}
        organizationSlug={organizationSlug}
      />
    </DropdownMenu>
  )
}
