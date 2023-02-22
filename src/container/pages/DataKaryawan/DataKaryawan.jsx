import { Space, Table, Button } from 'antd';
import './DataKaryawan.css';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    Nik: '7138129312402',
    Name: 'Brown',
    Email: "aidilashyariumar@gmial.com",
    jabatan: 'STAFF',
    Shift : 'FullTime',
    lokasi: 'perintis',
  },
  {
    key: '2',
    Nik: '13234828',
    Name: 'Green',
    Email: "aidilashyariumar@gmial.com",
    jabatan: 'STAFF',
    Shift : 'FullTime',
    lokasi: 'perintis',
  },
  {
    key: '3',
    Nik: '2342346236',
    Name: 'Black',
    Email: "aidilashyariumar@gmial.com",
    jabatan: 'STAFF',
    Shift : 'FullTime',
    lokasi: 'perintis',
  },
  {
    key: '3',
    Nik: '2342346236',
    Name: 'Black',
    Email: "aidilashyariumar@gmial.com",
    jabatan: 'STAFF',
    Shift : 'FullTime',
    lokasi: 'perintis',
  },
  {
    key: '3',
    Nik: '2342346236',
    Name: 'Black',
    Email: "aidilashyariumar@gmial.com",
    jabatan: 'STAFF',
    Shift : 'FullTime',
    lokasi: 'perintis',
  },
];
const DataKarywan = () => (
  <div className="data-karyawan">
    <div className='header-table'>
      <h1>Data Karyawan</h1>
      <Button>tambah data </Button>
    </div>
    <hr />
  <Table dataSource={data} key='table'>
    <Column title="No" dataIndex="key" key="key"/>
    <Column title="Nik" dataIndex="Nik" key="Nik" />
    <Column title="Name" dataIndex="Name" key="Name" />
    <Column title="Email" dataIndex="Email" key="Email" />
    <Column title="jabatan" dataIndex="jabatan" key="jabatan" />
    <Column title="Shift" dataIndex="Shift" key="Shift" />
    <Column title="Lokasi" dataIndex="lokasi" key="lokasi " />
    {/* <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    /> */}
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <Button>Edit</Button>
          <Button>Hapus</Button>
        </Space>
      )}
    />
  </Table>
  </div>
);
export default DataKarywan;