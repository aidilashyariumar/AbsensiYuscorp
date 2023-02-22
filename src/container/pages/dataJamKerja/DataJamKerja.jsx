import { Table } from 'antd';
import { useState, useEffect } from 'react';
// import './App.css';
import { getAllPosition } from '../../../services/position';

function DataJamKerja(){

   
  const [data, setData] = useState([])
  const [loading ,setLoading] = useState(false)

  useEffect(() => {
    getData()
  },[])

  const getData = async () => {
    setLoading(true)
    const response = await getAllPosition()
    setData(response)
    setLoading(false)
  }

  const columns = [
    {
      title: 'nama orang',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'email orang',
      dataIndex: 'email',
      key: 'email'
    },
  ]

  return (
    <div className="App">
      <Table
        columns={columns}
        dataSource={data}
        loading={loading  }
      />
    </div>
  );
}

export default DataJamKerja;