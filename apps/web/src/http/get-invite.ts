import { Invite } from '@/types/Invite'
import { Organization } from '@/types/Organization'

import { api } from './api-client'

type GetInviteResponse = {
  invite: Invite & {
    organization: {
      name: Organization['name']
    }
  }
}

export async function getInvite(inviteId: Invite['id']) {
  const result = await api.get(`invites/${inviteId}`).json<GetInviteResponse>()

  return result
}
