import { Invite } from '@/types/Invite'

import { api } from './api-client'

type GetPendingInvitesResponse = {
  invites: Array<
    Invite & {
      organization: {
        name: string
      }
    }
  >
}

export async function getPendingInvites() {
  const result = await api
    .get('pending-invites')
    .json<GetPendingInvitesResponse>()
  return result
}
