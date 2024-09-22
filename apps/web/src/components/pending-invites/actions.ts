'use server'
import { revalidateTag } from 'next/cache'

import { acceptInvite } from '@/http/accept-invite'
import { rejectInvite } from '@/http/reject-invite'
import { Invite } from '@/types/Invite'

export async function acceptInviteAction(inviteId: Invite['id']) {
  await acceptInvite(inviteId)
  revalidateTag('organizations')
}

export async function rejectInviteAction(inviteId: Invite['id']) {
  await rejectInvite(inviteId)
}
