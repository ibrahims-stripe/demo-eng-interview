import React, { Suspense } from 'react'
import SuccessPage from '@/app/Components/Success/SuccessPage'

const page = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPage />
    </Suspense>
  )
}

export default page