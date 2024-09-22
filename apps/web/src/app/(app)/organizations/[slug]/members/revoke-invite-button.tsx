import { XOctagon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Invite } from '@/types/Invite'

import { revokeInviteAction } from './actions'

type RevokeInviteButtonProps = {
  inviteId: Invite['id']
}

export function RevokeInviteButton({ inviteId }: RevokeInviteButtonProps) {
  return (
    <form action={revokeInviteAction.bind(null, inviteId)}>
      <Button size="sm" variant="destructive">
        <XOctagon className="mr-2 size-4" />
        Revoke invite
      </Button>
    </form>
  )
}
