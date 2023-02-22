import { FloatButton } from 'antd';
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
// import { SearchOutlined } from '@ant-design/icons';

function ButtonIcon() {
    return (
      <FloatButton type="primary" shape="circle" icon={<PlusOutlined />} />
    );
  }
export default ButtonIcon;