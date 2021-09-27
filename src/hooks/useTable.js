import { useState, useEffect } from 'react';

// utils
import { ArraySort } from '../utils/ArraySort';

const useTable = ({ tableRecords = [], orderByProp = "id", counts = 0 }) => {
  const [records, setRecords] = useState(tableRecords);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(orderByProp);
  const [selected, setSelected] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageCount, setPageCount] = useState(counts);
  const [isRecordNotFound, setIsRecordNotFound] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchText = (e) => { setSearchText(e.target.value); }
  
  const handleSortRequest = (property) => (event) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }

  useEffect(() => { setIsRecordNotFound(records.length === 0); },[records]);
  useEffect(() => {
    const filteredData = ArraySort(records, order, orderBy);
    setRecords(filteredData);
  },[order, orderBy]);

  const handleSelectAllClick = (event) => {
    if(event.target.checked){
      const newSelected = records.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  }

  const handleCheckboxClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if(selectedIndex === -1){
      newSelected = newSelected.concat(selected, id);
    } else if(selectedIndex === 0){
      newSelected = newSelected.concat(selected.slice(1));
    } else if(selectedIndex === selected.length-1) {
      newSelected = newSelected.concat(selected.slice(0,-1));
    } else if (selectedIndex > 0){
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  }

  const handlePagination = (event, page) => {
    setPageNo(page);
  }

  return {
    records, 
    setRecords,
    order,
    orderBy,
    handleSortRequest,
    
    selected,
    handleSelectAllClick,
    handleCheckboxClick,

    pageNo,
    pageCount,
    setPageCount,
    handlePagination,

    isRecordNotFound,

    searchText,
    handleSearchText
  }
};

export default useTable;
