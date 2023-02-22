
import { Route, Routes } from "react-router-dom";
import './App.css';

// import Cuti from './container/pages/permohonanCuti/PermohonanCuti';
import Home from './container';
import PermohonanCuti from './container/pages/permohonanCuti/PermohonanCuti';
import Absen from './container/pages/absensi/absen';
import Index from "./container/Home";
import DataKarywan from "./container/pages/DataKaryawan/DataKaryawan";
import LoginPage from "./container/pages/login/LoginPage";
import DataLokasi from "./container/pages/DataLokasi/DataLokasi";
import DataJamKerja from "./container/pages/dataJamKerja/DataJamKerja";
import DataJabatan from "./container/pages/DataJabatan";


function App() {
  return (
      
      <Routes>
            <Route exact path="/login" element={<LoginPage/>} />
            <Route path="/" element={<Home/>}> 
              <Route index element={<Index/>} />
              
                <Route path='data-karyawan' element={<DataKarywan/>}/>
                <Route path='data-jam-kerja' element={<DataJamKerja/>} />
                <Route path='data-jabatan' element={<DataJabatan/>} />
                <Route path='data-lokasi' element={<DataLokasi/>} />
              
              <Route path='data-permohonan-cuti' element={<PermohonanCuti/>}/>
              <Route path='data-absensi' element={<Absen/>}/>
            </Route>
      </Routes>
        
        
  
    
  );
}

export default App;
