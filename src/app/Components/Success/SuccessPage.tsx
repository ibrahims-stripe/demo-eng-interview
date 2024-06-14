'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const SuccessPage = () => {
  const searchParams = useSearchParams()
  const sessionID = searchParams.get('session_id');

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Success!</h1>
        <p className='mt-4'>Your order has been placed successfully. Your session ID is {sessionID || 'N/A'}</p>
      </div>
    </div>
  )
}

export default SuccessPage