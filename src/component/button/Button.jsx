import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './button.css';

function MyButton() {
  return (
    <Button className='button' icon={<PlusOutlined/>}></Button>
  );
}

export default MyButton;