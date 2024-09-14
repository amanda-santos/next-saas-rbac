import { Organization } from '@/types/Organization'

import { api } from './api-client'

interface GetOrganizationResponse {
  organization: Organization
}

export async function getOrganization(slug: string) {
  const result = await api
    .get(`organizations/${slug}`, {
      next: {
        tags: ['organization'],
      },
    })
    .json<GetOrganizationResponse>()

  return result
}
