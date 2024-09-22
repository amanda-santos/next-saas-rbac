import { Invite } from '@/types/Invite'
import { Organization } from '@/types/Organization'

import { api } from './api-client'

type RevokeInviteRequest = {
  organizationSlug: Organization['slug']
  inviteId: Invite['id']
}

export async function revokeInvite({
  organizationSlug,
  inviteId,
}: RevokeInviteRequest) {
  await api.delete(`organizations/${organizationSlug}/invites/${inviteId}`)
}
