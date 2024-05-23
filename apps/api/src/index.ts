import { defineAbilityFor, organizationSchema, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user-id' })

console.log(ability.can('get', 'Billing'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('delete', project))

const adminAbility = defineAbilityFor({ role: 'ADMIN', id: 'admin-id' })

console.log(adminAbility.can('get', 'Billing'))
console.log(adminAbility.can('create', 'Invite'))
console.log(adminAbility.can('delete', project))

const organization = organizationSchema.parse({
  id: 'organization-id',
  ownerId: 'user-id',
})

console.log(ability.can('delete', organization))
console.log(adminAbility.can('delete', organization))
