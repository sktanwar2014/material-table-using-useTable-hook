import React from 'react';

// components 
import CustomTable from '../../components/table';
import { TableHeader, EmployeeList, TableRowItem } from './TableContent';



export default function Client() {
  return (
    <CustomTable 
      HeadData={TableHeader}
      BodyData={EmployeeList}
      RowItem={TableRowItem}
    />
  )
}