'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { acceptInvite } from '@/http/accept-invite'
import { Invite } from '@/types/Invite'

export async function signInFromInvite(invite: Invite) {
  'use server'

  cookies().set('inviteId', invite.id)

  redirect(`/auth/sign-in?email=${invite.email}`)
}

export async function acceptInviteAction(inviteId: Invite['id']) {
  'use server'

  await acceptInvite(inviteId)

  redirect('/')
}
