import { Space, Table, Button } from 'antd';
import './DataLokasi.css';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    Nik: '7138129312402',
    Name: 'Brown',
    Email: "aidilashyariumar@gmial.com",
    jumlahKaryawan: '5',
    Shift : 'FullTime',
    lokasi: 'perintis',
  },
  {
    key: '2',
    Nik: '13234828',
    Name: 'Green',
    Email: "aidilashyariumar@gmial.com",
    jumlahKaryawan: '5',
    Shift : 'FullTime',
    lokasi: 'perintis',
  },
  {
    key: '3',
    Nik: '2342346236',
    Name: 'Black',
    Email: "aidilashyariumar@gmial.com",
    jumlahKaryawan: '5',
    Shift : 'FullTime',
    lokasi: 'perintis',
  },
  {
    key: '3',
    Nik: '2342346236',
    Name: 'Black',
    Email: "aidilashyariumar@gmial.com",
    jumlahKaryawan: '5',
    Shift : 'FullTime',
    lokasi: 'perintis',
  },
  {
    key: '3',
    Nik: '2342346236',
    Name: 'kakatua',
    Email: "aidilashyariumar@gmial.com",
    jumlahKaryawan: '5',
    Shift : 'FullTime',
    lokasi: 'jl. kakatua 2 NO. 88 makassar',
  },
];
const DataLokasi = () => (
  <div className="data-karyawan">
    <div className='header-table'>
      <h1>Data Karyawan</h1>
      <Button>tambah data </Button>
    </div>
    <hr />
  <Table dataSource={data} className="table-lokasi" pagination={false}>
    <Column title="No" dataIndex="key" key="key"/>
    <Column title="Nama lokasi" dataIndex="Name" key="Name" />
    <Column title="Alamat" dataIndex="lokasi" key="lokasi" />
    <Column  title="Jumlah Karywan" dataIndex="jumlahKaryawan" key="jumlahKaryawan"className='jumlahKaryawan' />
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
export default DataLokasi;