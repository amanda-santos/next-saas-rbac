import { XCircle } from 'lucide-react'
import { redirect } from 'next/navigation'

import { getCurrentOrganizationSlug } from '@/auth'
import { Button } from '@/components/ui/button'
import { shutdownOrganization } from '@/http/shutdown-organization'

export function ShutdownOrganizationButton() {
  async function shutdownOrganizationAction() {
    'use server'

    const currentOrganizationSlug = getCurrentOrganizationSlug()

    if (!currentOrganizationSlug) {
      return
    }

    await shutdownOrganization({ slug: currentOrganizationSlug })

    redirect('/')
  }

  return (
    <form action={shutdownOrganizationAction}>
      <Button type="submit" variant="destructive" className="w-56">
        <XCircle className="mr-2 size-4" />
        Shutdown organization
      </Button>
    </form>
  )
}
