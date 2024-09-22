import { Invite } from '@/types/Invite'
import { Organization } from '@/types/Organization'

import { api } from './api-client'

type GetInvitesResponse = {
  invites: Array<Invite>
}

export async function getInvites(organizationSlug: Organization['slug']) {
  const result = await api
    .get(`organizations/${organizationSlug}/invites`, {
      next: {
        tags: [`${organizationSlug}/invites`],
      },
    })
    .json<GetInvitesResponse>()

  return result
}
