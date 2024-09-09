import { Organization } from '@/types/Organization'
import { Project } from '@/types/Project'

import { api } from './api-client'

type CreateProjectRequest = Pick<Project, 'name' | 'description'> & {
  organizationSlug: Organization['slug']
}

type CreateProjectResponse = void

export async function createProject({
  organizationSlug,
  name,
  description,
}: CreateProjectRequest): Promise<CreateProjectResponse> {
  await api.post(`organizations/${organizationSlug}/projects`, {
    json: {
      name,
      description,
    },
  })
}
