import React from 'react'
import { Table } from 'react-bootstrap'
import TableHead from '../components/TableHead'
// import {CSVLink} from 'react-csv';

const Products: React.FC = () => {
  const headers = ["id", "name", "description"]

  return (
    <div className='container'>
      <Table striped id="mytable">
          <TableHead headers={headers}/>
          <tbody>
            <tr>
              <td>1</td>
              <td>Niraina</td>
              <td>Developpeur</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Leba</td>
              <td>Developpeur</td>
            </tr>
          </tbody>
      </Table>
    </div>
  )
}

export default Products