import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import React from 'react'

/**
 * This hook will handle navigation in regard of
 * authenticated user onboarding status.
 * Should be called on SignUp and Login pages.
 * @returns ():void
 */
export default function useOnboardingNavigation() {
  const { getCurrentUser } = useAuth()

  return React.useCallback(async () => {
    const user = await getCurrentUser()

    if (user && !user?.hasOnboarded) {
      navigate(routes.onboarding())
    } else {
      navigate(routes.homepage())
    }
  }, [])
}
