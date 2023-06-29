import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

import React from 'react'

const FormOne = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    return (
        <>
    
          <Form
            labelCol={{
              span: 4,
            }}
        
            layout="vertical"
         
            className='grid grid-cols-12 border-4 gap-3 p-[30px] justify-around'
          >
       
   
            <Form.Item label="Input" className='col-span-full'>
              <Input />
            </Form.Item>
            <Form.Item label="Input" className='justify-self-around col-span-4'>
              <Select  />
            </Form.Item>
            <Form.Item label="Input" className='justify-self-around col-span-4'>
              <Input />
            </Form.Item>
            <Form.Item label="Input" className='justify-self-around col-span-4'>
              <Input />
            </Form.Item>
            <Form.Item label="Input" className='justify-self-around col-span-6'>
              <Input />
            </Form.Item>
            <Form.Item label="Input" className='justify-self-around col-span-6'>
              <Input />
            </Form.Item>
            <Form.Item label="Input" className='justify-self-around col-span-full '>
              <Input className='h-[60px]'/>
            </Form.Item>
           
           
            
           
          

           
         
           
        
          </Form>
        </>
      );
  
}

export default FormOne