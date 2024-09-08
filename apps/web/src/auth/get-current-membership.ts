import { getMembership } from '@/http/get-membership'

import { getCurrentOrganizationSlug } from './get-current-organization-slug'

export async function getCurrentMembership() {
  const organizationSlug = getCurrentOrganizationSlug()

  if (!organizationSlug) {
    return null
  }

  const { membership } = await getMembership(organizationSlug)

  return membership
}
