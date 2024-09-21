'use server'
import { revalidateTag } from 'next/cache'

import { getCurrentOrganizationSlug } from '@/auth'
import { removeMember } from '@/http/remove-member'

export async function removeMemberAction(memberId: string) {
  const currentOrganizationSlug = getCurrentOrganizationSlug()

  if (!currentOrganizationSlug) {
    throw new Error('No current organization found')
  }

  await removeMember({
    organizationSlug: currentOrganizationSlug,
    memberId,
  })

  revalidateTag(`${currentOrganizationSlug}/members`)
}
