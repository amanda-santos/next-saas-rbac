import { Role } from '@saas/auth'

import { Organization } from '@/types/Organization'

import { api } from './api-client'

interface GetMembersResponse {
  members: {
    id: string
    userId: string
    role: Role
    name: string | null
    email: string
    avatarUrl: string | null
  }[]
}

export async function getMembers(organizationSlug: Organization['slug']) {
  const result = await api
    .get(`organizations/${organizationSlug}/members`, {
      next: {
        tags: [`${organizationSlug}/members`],
      },
    })
    .json<GetMembersResponse>()

  return result
}
