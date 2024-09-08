import { Project } from '@/types/Project'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type ProjectItemProps = Pick<Project, 'avatarUrl' | 'name'>

export function ProjectItem({ avatarUrl, name }: ProjectItemProps) {
  return (
    <>
      <Avatar className="mr-2 size-4">
        {avatarUrl && <AvatarImage src={avatarUrl} />}
        <AvatarFallback />
      </Avatar>
      <span className="truncate text-left">{name}</span>
    </>
  )
}
