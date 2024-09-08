import { Organization } from '@/types/Organization'

import { api } from './api-client'

type GetOrganizationsResponse = {
  organizations: Array<Pick<Organization, 'id' | 'name' | 'slug' | 'avatarUrl'>>
}

export async function getOrganizations() {
  const result = await api.get('organizations').json<GetOrganizationsResponse>()

  return result
}
