import { FormEvent, useState, useTransition } from 'react'

export type FormState = {
  success: boolean
  message: string | null
  errors: Record<string, string[]> | null
}

type UseFormStateParams = {
  action: (data: FormData) => Promise<FormState>
  onSuccess?: () => void | Promise<void>
  initialState?: FormState
}

export function useFormState({
  action,
  initialState,
  onSuccess,
}: UseFormStateParams) {
  const [isPending, startTransition] = useTransition()

  const [formState, setFormState] = useState(
    initialState ?? { success: false, message: null, errors: null },
  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    startTransition(async () => {
      const state = await action(data)

      setFormState(state)

      if (state.success && onSuccess) {
        await onSuccess()
      }
    })
  }

  return [formState, handleSubmit, isPending] as const
}
