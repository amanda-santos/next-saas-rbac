import { Organization } from '@/types/Organization'

import { api } from './api-client'

type RemoveMemberRequest = {
  organizationSlug: Organization['slug']
  memberId: string
}

export async function removeMember({
  organizationSlug,
  memberId,
}: RemoveMemberRequest) {
  await api.delete(`organizations/${organizationSlug}/members/${memberId}`)
}
