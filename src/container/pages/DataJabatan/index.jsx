import { getAllPosition } from "../../../services/position"
function DataJabatan(){

    const getData = async () => {
        const positionResponse = await getAllPosition()
        console.log(positionResponse)
      }

      return(
          <button onClick={getData} >ambil data</button>
      )
}

export default DataJabatan