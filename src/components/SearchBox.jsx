import { Form, Input } from 'antd'
import React from 'react'
import { GrSearch } from 'react-icons/gr'

const SearchBox = () => {
  return (
    <Form className='border'>
        <Form.Item className='flex lg:my-[0.1rem]'>
            <Input type='text' className='relative'/>
            <GrSearch className='absolute top-[0.5rem] right-3' />
        </Form.Item>
    </Form>
  )
}

export default SearchBox