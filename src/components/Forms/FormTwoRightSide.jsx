import { Button, Form, Input, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const FormTwoRightSide = () => {
  return (
    <Form layout='vertical' className='grid p-[10px] grid-cols-12 w-[310px] mx-auto'>
        <Form.Item label='label item' className='col-span-full'>
            <Input type='text'/>
        </Form.Item>
        <Form.Item label='label item' className='col-span-full'>
            <Select type='text'/>
        </Form.Item>
        <Form.Item label='label item' className='col-span-full'>
            <TextArea type='text' rows={5}/>
        </Form.Item>
        <Button  className='col-span-full  border border-2 text-white' style={{backgroundColor:"#1677ff"}} block >
            Submit
            </Button>
    </Form>
  )
}

export default FormTwoRightSide