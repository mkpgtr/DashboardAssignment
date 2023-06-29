import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsList, BsListNested} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
const Header = () => {
  return (
    <div className='w-full bg-black text-white flex p-4 sticky top-0 z-10 justify-between'>
        <div className='ml-3 flex gap-4'>
            <div className='flex gap-2 items-center'>
                <span><AiOutlineHome /></span>
                <span>Home</span>
            </div>
            <div className='flex gap-2 items-center'>
                <span><BsList /></span>
                <span>Contents</span>
            </div>
            <div className='flex gap-2 items-center'>
                <span><BsListNested /></span>
                <span>Categories</span>
            </div>
            <div className='flex gap-2 items-center'>
                <span><FiSettings /></span>
                <span>Settings</span>
            </div>
        </div>
        <div className='bg-white text-black  py-[3px] pr-[15px] px-[3px] flex justify-around rounded-[2rem] items-center'>
            <img src="https://randomuser.me/api/portraits/men/46.jpg" className='max-w-[30px] max-h-[30px]   gap-2 rounded-[50%]' alt="" />
            <div className='text-sm sm:hidden md:block lg:block'>Ismail Ihsan Bulbul</div>
        </div>
    </div>
  )
}

export default Header