import { Project } from '@/types/Project'

import { api } from './api-client'

type GetProjectsResponse = {
  projects: Array<Project>
}

export async function getProjects(org: string) {
  const result = await api
    .get(`organizations/${org}/projects`)
    .json<GetProjectsResponse>()

  return result
}
