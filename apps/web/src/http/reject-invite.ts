import { Invite } from '@/types/Invite'

import { api } from './api-client'

export async function rejectInvite(inviteId: Invite['id']) {
  await api.post(`invites/${inviteId}/reject`)
}
