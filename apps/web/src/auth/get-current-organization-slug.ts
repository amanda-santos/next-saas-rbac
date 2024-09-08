import { cookies } from 'next/headers'

export function getCurrentOrganizationSlug() {
  return cookies().get('org')?.value ?? null
}
