import { Plus } from 'lucide-react'
import Link from 'next/link'

import { getAbility, getCurrentOrganizationSlug } from '@/auth'
import { Button } from '@/components/ui/button'

import { ProjectsList } from './projects-list'

export default async function Projects() {
  const currentOrganizationSlug = getCurrentOrganizationSlug()
  const permissions = await getAbility()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        {permissions?.can('create', 'Project') && (
          <Button size="sm" asChild>
            <Link
              href={`/organizations/${currentOrganizationSlug}/projects/new`}
            >
              <Plus className="mr-2 size-4" />
              Create project
            </Link>
          </Button>
        )}
      </div>

      {permissions?.can('get', 'Project') ? (
        <ProjectsList />
      ) : (
        <p className="text-sm text-muted-foreground">
          You are not allowed to see organization projects.
        </p>
      )}
    </div>
  )
}
