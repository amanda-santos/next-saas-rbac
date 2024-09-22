import { Role } from '@saas/auth'

export type Invite = {
  id: string
  role: Role
  email: string
  createdAt: string
  author: {
    id: string
    name: string | null
    avatarUrl: string | null
  } | null
}
