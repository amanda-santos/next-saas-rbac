import { cookies } from 'next/headers'

export function getCurrentOrganizationSlug() {
  return cookies().get('organizationSlug')?.value ?? null
}
