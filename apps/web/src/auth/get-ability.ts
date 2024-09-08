import { defineAbilityFor } from '@saas/auth'

import { getCurrentMembership } from './get-current-membership'

export async function getAbility() {
  const membership = await getCurrentMembership()

  if (!membership) {
    return null
  }

  const ability = defineAbilityFor({
    id: membership.userId,
    role: membership.role,
  })

  return ability
}
