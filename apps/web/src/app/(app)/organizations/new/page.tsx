import { Header } from '@/components/header'

import { OrganizationForm } from '../organization-form'

export default function CreateOrganization() {
  return (
    <div className="space-y-48 py-4">
      <Header />
      <main className="mt-14 flex w-full flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Create organization</h1>

        <OrganizationForm />
      </main>
    </div>
  )
}
