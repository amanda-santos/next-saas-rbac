import { PlusCircle } from 'lucide-react'
import Link from 'next/link'

import { Organization } from '@/types/Organization'
import { Project } from '@/types/Project'

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu'
import { ProjectItem } from './project-item'

type ProjectSwitcherMenuProps = {
  projects: Array<Project>
  organizationSlug: Organization['slug']
}

export function ProjectSwitcherMenu({
  projects,
  organizationSlug,
}: ProjectSwitcherMenuProps) {
  return (
    <DropdownMenuContent
      align="end"
      alignOffset={-16}
      sideOffset={12}
      className="w-[200px]"
    >
      <DropdownMenuGroup>
        <DropdownMenuLabel>Projects</DropdownMenuLabel>
        {projects.map((project) => {
          return (
            <DropdownMenuItem key={project.id} asChild>
              <Link
                href={`/organizations/${organizationSlug}/projects/${project.slug}`}
              >
                <ProjectItem {...project} />
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuItem asChild>
        <Link href={`/organizations/${organizationSlug}/projects/new`}>
          <PlusCircle className="mr-2 size-4" />
          Create new
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
