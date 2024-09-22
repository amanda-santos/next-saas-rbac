import { Role } from '@saas/auth'

import { Invite } from '@/types/Invite'
import { Organization } from '@/types/Organization'

import { api } from './api-client'

interface CreateInviteRequest {
  organizationSlug: Organization['slug']
  email: Invite['email']
  role: Role
}

type CreateInviteResponse = void

export async function createInvite({
  organizationSlug,
  email,
  role,
}: CreateInviteRequest): Promise<CreateInviteResponse> {
  await api.post(`organizations/${organizationSlug}/invites`, {
    json: {
      email,
      role,
    },
  })
}
