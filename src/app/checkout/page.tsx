import React from 'react'
import CartSummary from './CartSummary'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-12 mx-8 my-16'>
        <div>payment </div>
        <CartSummary/>
    </div>
  )
}

export default page