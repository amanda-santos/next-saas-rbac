import { redirect } from 'next/navigation'

import { getAbility } from '@/auth'

import { ProjectForm } from './project-form'

export default async function CreateProject() {
  const permissions = await getAbility()

  if (permissions?.cannot('create', 'Project')) {
    redirect('/')
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Create project</h1>

      <ProjectForm />
    </div>
  )
}
