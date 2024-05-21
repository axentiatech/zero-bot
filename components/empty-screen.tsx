import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-3 rounded-lg bg-background p-8">
        <h1 className="text-[4rem] bg-gradient-to-r bg-clip-text text-transparent from-gray-600 to-black to font-semibold">
          Hello ! Welcome to Zero AI.
        </h1>
        <h1 className="text-3xl font-semibold">
          How Can I assist you today ?
        </h1>
      </div>
    </div>
  )
}
