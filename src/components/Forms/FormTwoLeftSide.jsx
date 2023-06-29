import { Form, Input, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const FormTwoLeftSide = () => {
  return (
    <Form className='grid grid-cols-12 p-[10px] gap-2' layout='vertical'> 
        <Form.Item label="Label Item"  className='col-span-full justify-self-around'>
            <Input type='text' />
        </Form.Item>
        <Form.Item label="Label Item"  className='col-span-full justify-self-around'>
            <Select type='text' />
        </Form.Item>
        <Form.Item label="Label Item"  className='col-span-6'>
            <Input type='text' />
        </Form.Item>
        <Form.Item label="Label Item"  className='col-span-6'>
            <Input type='text' />
        </Form.Item>
        <Form.Item label="Label Item"  className='col-span-full'>
            <TextArea type='text' rows={6}  />
        </Form.Item>
    </Form>
  )
}

export default FormTwoLeftSide