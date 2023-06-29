import React from 'react'
import TableComponent from '../components/TableComponent'
import FormOne from '../components/Forms/FormOne'
import FormTwoLeftSide from '../components/Forms/FormTwoLeftSide'
import FormTwoRightSide from '../components/Forms/FormTwoRightSide'
import ContentHeader from '../components/ContentHeader'
import Cards from '../components/Cards'

const SampleContent = () => {
  return (
    <div className='p-[30px]'>
        <div>
        <ContentHeader />
        </div>
        <div>
        <Cards />
        </div>
        <div className='border border-2'>
        <TableComponent />
        </div>
        <div className=''>
            <FormOne />
        </div>
        <div className='flex justify-center gap-2 xsm:flex-col'>
            {/* ! file sizes as given in the figma design file */}
            <div className='lg:w-[780px] '><FormTwoLeftSide/> </div> 
            <div><FormTwoRightSide className='lg:w-[310px]' /></div> 
        </div>
    </div>
  )
}

export default SampleContent