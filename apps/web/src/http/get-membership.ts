import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetMembershipResponse {
  membership: {
    id: string
    role: Role
    organizationId: string
    userId: string
  }
}

export async function getMembership(organizationSlug: string) {
  const result = await api
    .get(`organization/${organizationSlug}/membership`)
    .json<GetMembershipResponse>()

  return result
}
