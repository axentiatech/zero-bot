'use server'

import { signIn } from '@/auth'

export const OauthAction = async (type: 'Google' | 'Apple') => {
  switch (type) {
    case 'Google':
      return signIn('google', {
        redirect: true,
        redirectTo: '/'
      })
    case 'Apple':
      return signIn('Apple', {
        redirect: true,
        redirectTo: '/'
      })
  }
}
