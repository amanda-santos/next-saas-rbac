import { ChevronsUpDown, Loader2 } from 'lucide-react'

import { Project } from '@/types/Project'

import { DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Skeleton } from '../ui/skeleton'
import { ProjectItem } from './project-item'

type ProjectSwitcherTriggerProps = {
  isLoadingProjects: boolean
  currentProject?: Project | null
}

export function ProjectSwitcherTrigger({
  isLoadingProjects,
  currentProject,
}: ProjectSwitcherTriggerProps) {
  return (
    <DropdownMenuTrigger className="flex w-[168px] items-center gap-2 rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-primary">
      {isLoadingProjects ? (
        <>
          <Skeleton className="mr-2 size-4 rounded-full" />
          <Skeleton className="h-4 w-full flex-1" />
        </>
      ) : (
        <>
          {currentProject ? (
            <>
              <ProjectItem {...currentProject} />
            </>
          ) : (
            <span className="text-muted-foreground">Select project</span>
          )}
        </>
      )}

      {isLoadingProjects ? (
        <Loader2 className="ml-auto size-4 shrink-0 animate-spin text-muted-foreground" />
      ) : (
        <ChevronsUpDown className="ml-auto size-4 shrink-0 text-muted-foreground" />
      )}
    </DropdownMenuTrigger>
  )
}
