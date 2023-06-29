import React from 'react'
import Actions from './Actions'
import SearchBox from './SearchBox'

const ContentHeader = () => {
  return (
    <div className='flex justify-between lg:h-[37px] items-center mb-4 xsm:flex-col'>
        <Actions/>
        <SearchBox />
    </div>
  )
}

export default ContentHeader