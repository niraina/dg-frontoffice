import React from 'react'
import { Thead } from '../interfaces/thead'

const TableHead: React.FC<Thead> = (props: Thead) => {
  return (
    <thead>
      <tr>
        {props.headers.map(header => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead