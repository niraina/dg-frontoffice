import React, {useEffect} from 'react'
import { Table } from 'react-bootstrap'
import TableHead from '../components/TableHead'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../features/Products/ProductsSlice';
// import { Products } from '../interfaces/products';
// import {CSVLink} from 'react-csv';

const Products = () => {
  const headers = ["id", "name", "description"]
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(fetchData())
  }, [dispatch])

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