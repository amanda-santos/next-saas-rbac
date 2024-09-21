'use server'
import { Role } from '@saas/auth'
import { revalidateTag } from 'next/cache'

import { getCurrentOrganizationSlug } from '@/auth'
import { removeMember } from '@/http/remove-member'
import { updateMember } from '@/http/update-member'

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

export async function updateMemberAction(memberId: string, role: Role) {
  const currentOrganizationSlug = getCurrentOrganizationSlug()

  if (!currentOrganizationSlug) {
    throw new Error('No current organization found')
  }

  await updateMember({
    organizationSlug: currentOrganizationSlug,
    memberId,
    role,
  })

  revalidateTag(`${currentOrganizationSlug}/members`)
}
