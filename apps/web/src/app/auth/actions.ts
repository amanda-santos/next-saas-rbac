'use server'

import { redirect } from 'next/navigation'

export async function signInWithGitHub() {
  const gitHubSignInURL = new URL('login/oauth/authorize', 'https://github.com')

  gitHubSignInURL.searchParams.set('client_id', 'my-client-id')
  gitHubSignInURL.searchParams.set(
    'redirect_uri',
    'http://localhost:3000/api/auth/callback',
  )
  gitHubSignInURL.searchParams.set('scope', 'user')

  redirect(gitHubSignInURL.toString())
}
