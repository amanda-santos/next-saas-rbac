export type Organization = {
  id: string
  name: string
  slug: string
  domain: string | null
  avatarUrl: string | null
  shouldAttachUsersByDomain: boolean
  ownerId: string
  createdAt: string
  updatedAt: string
}
