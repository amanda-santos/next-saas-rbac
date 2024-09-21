import { Role } from '@saas/auth'

import { Organization } from '@/types/Organization'

import { api } from './api-client'

type UpdateMemberRequest = {
  organizationSlug: Organization['slug']
  memberId: string
  role: Role
}

export async function updateMember({
  organizationSlug,
  memberId,
  role,
}: UpdateMemberRequest) {
  await api.put(`organizations/${organizationSlug}/members/${memberId}`, {
    json: { role },
  })
}
