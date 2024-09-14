import { Organization } from '@/types/Organization'

import { api } from './api-client'

type UpdateOrganizationRequest = Pick<
  Organization,
  'slug' | 'name' | 'domain' | 'shouldAttachUsersByDomain'
>

type UpdateOrganizationResponse = void

export async function updateOrganization({
  slug,
  name,
  domain,
  shouldAttachUsersByDomain,
}: UpdateOrganizationRequest): Promise<UpdateOrganizationResponse> {
  await api.put(`organizations/${slug}`, {
    json: {
      name,
      domain,
      shouldAttachUsersByDomain,
    },
  })
}
