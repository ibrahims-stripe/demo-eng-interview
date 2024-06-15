'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {

    console.error(error)
  }, [error])

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='text-center'>
        <h2>Something went wrong!</h2>
        <button
          className='btn btn-primary text-white justify-start'
          onClick={
            () => reset()
          }
        >
          Load Again
        </button>
      </div>
    </div>
  )
}