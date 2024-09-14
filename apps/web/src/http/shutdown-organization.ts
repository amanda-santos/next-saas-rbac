import { Organization } from '@/types/Organization'

import { api } from './api-client'

type ShutdownOrganizationRequest = Pick<Organization, 'slug'>

export async function shutdownOrganization({
  slug,
}: ShutdownOrganizationRequest) {
  await api.delete(`organizations/${slug}`)
}
