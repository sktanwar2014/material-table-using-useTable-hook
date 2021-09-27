import React, { useEffect, useState } from 'react';

// components 
import CustomTable from '../../components/table';
import { TableHeader, EmployeeList, TableRowItem } from './TableContent';



export default function Dashboard() {
  const [bodyData, setBodyData] = useState([]);
  const [counts, setCounts] = useState(EmployeeList.length);
  const [isLoading, setIsLoading] = useState(false);
  const [tableCallbackProps, setTableCallbackProps] = useState({});
  const pageInterval = 10;
  const { pageNo, searchText } = tableCallbackProps;

  useEffect(() => {
    setIsLoading(true);
    const Rows = [...EmployeeList];
    if(searchText){
      // searching by first name
      const Searched = Rows.filter((ele) => ele.first_name.toLowerCase().includes(searchText.toLowerCase()));
      const Limited = Searched.slice((pageNo * pageInterval) - pageInterval, (pageNo * pageInterval));
      setBodyData(Limited);
      setCounts(Searched.length);
    } else {
      const Limited = Rows.slice((pageNo * pageInterval) - pageInterval, (pageNo * pageInterval));
      setBodyData(Limited);    
    }    
    setIsLoading(false);
  },[pageNo, searchText]);

  return (
    <CustomTable 
      HeadData={TableHeader}
      BodyData={bodyData}
      RowItem={TableRowItem}
      pagination={{
        counts: counts,
        interval: pageInterval
      }}
      enableSearch
      enableSort
      enableSelect
      tableCallback={(props)=> setTableCallbackProps(props)}
      isLoading={isLoading}
    />
  )
}