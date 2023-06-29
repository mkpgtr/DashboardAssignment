import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
const SingleCard = ({cardDetails}) => {
  return (
    <div className='flex items-center gap-2 border-2 p-[20px] lg:w-[256px] lg:h-[91px]'>
        <div style={{color:cardDetails.color,fontSize:"2rem"}}>
        {cardDetails.icon}
        </div>
        <div className='flex flex-col text-left '>
            <span className='text-sm'>{cardDetails.title}</span>
            <span className='font-semibold'>${cardDetails.revenue}</span>
        </div>
    </div>
  )
}

export default SingleCard