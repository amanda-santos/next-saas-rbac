import { Organization } from '@/types/Organization'

import { api } from './api-client'

type CreateOrganizationRequest = Pick<
  Organization,
  'name' | 'domain' | 'shouldAttachUsersByDomain'
>

type CreateOrganizationResponse = void

export async function createOrganization({
  name,
  domain,
  shouldAttachUsersByDomain,
}: CreateOrganizationRequest): Promise<CreateOrganizationResponse> {
  await api.post('organizations', {
    json: {
      name,
      domain,
      shouldAttachUsersByDomain,
    },
  })
}
