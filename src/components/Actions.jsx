import React from 'react'
import { AiOutlineSetting, AiTwotoneFileAdd, AiTwotonePlusSquare } from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
const Actions = () => {
  return (
    <div className='flex lg:gap-[30px]  lg:mb-2 items-center'>
        <div className='font-semibold capitalize'>add new post</div>
        <div className='flex items-center gap-[2px] capitalize'> <GrAdd /> <span>add content</span></div>
        <div className='flex items-center gap-[2px]'> <AiOutlineSetting height={24}/> <span>Settings</span></div>

    </div>
  )
}

export default Actions