import React from 'react'
import SingleCard from './Card'
import { AiOutlineShopping } from 'react-icons/ai'
const cardDetails = [
    {
        id:1,
        icon:<AiOutlineShopping />,
        title:"Total Sales",
        revenue:2456,
        color:'orange'
    },
    {
        id:2,
        icon:<AiOutlineShopping />,
        title:"Total Expenses",
        revenue:3328,
        color:'purple'
    },
    {
        id:3,
        icon:<AiOutlineShopping />,
        title:"Total Visitors",
        revenue:5325,
        color:'green'
    },
    {
        id:4,
        icon:<AiOutlineShopping />,
        title:"Total Orders",
        revenue:1328,
        color:'purple'
    }
]
const Cards = () => {
  return (
    <div className='flex xsm:flex-wrap xsm:justify-center justify-between'>

    {cardDetails.map((card)=>{
        return   <SingleCard cardDetails = {card}/>
    })}

    </div>
  )
}

export default Cards