import { getCurrentOrganizationSlug } from '@/auth'

import { NavLink } from './nav-link'
import { Button } from './ui/button'

export function Tabs() {
  const currentOrganizationSlug = getCurrentOrganizationSlug()

  return (
    <div className="border-b py-4">
      <nav className="mx-auto flex max-w-[1200px] items-center gap-2">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
        >
          <NavLink href={`/organizations/${currentOrganizationSlug}`}>
            Projects
          </NavLink>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
        >
          <NavLink href={`/organizations/${currentOrganizationSlug}/members`}>
            Members
          </NavLink>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
        >
          <NavLink href={`/organizations/${currentOrganizationSlug}/settings`}>
            Settings & Billing
          </NavLink>
        </Button>
      </nav>
    </div>
  )
}
