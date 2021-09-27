import React, { useEffect } from 'react'; 
import PropTypes from 'prop-types';

// material
import { 
  TableContainer, 
  Table, 
  Checkbox, 
  TableBody,
  Card
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

// hooks 
import useTable from '../../hooks/useTable';

// Components 
import TableHeader from './TableHeader';
import TableBodyRow from './TableBodyRow';
import NotFound from './NotFound';
import SearchBar from './SearchBar';


CustomTable.propTypes = {
  HeadData: PropTypes.array.isRequired,
  BodyData: PropTypes.array.isRequired,
  RowItem: PropTypes.element.isRequired,
  pagination: PropTypes.objectOf({
    counts: PropTypes.number,
    interval: PropTypes.number
  }),  
  tableCallback: PropTypes.func,
  isLoading: PropTypes.bool,
  enableSearch: PropTypes.bool,
  enableSort: PropTypes.bool,
  enableSelect: PropTypes.bool,
}

export default function CustomTable ({
  HeadData=[],
  BodyData=[],
  RowItem,
  pagination,
  tableCallback,
  isLoading=false,
  enableSearch=false,
  enableSort=false,
  enableSelect=false,
}) {
  const { 
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
  } = useTable({});

  useEffect(() => {
    if(typeof tableCallback === 'function'){
      tableCallback({ 
        records,  setRecords, order, orderBy, handleSortRequest, 
        selected, handleSelectAllClick, handleCheckboxClick, 
        pageNo, pageCount, setPageCount, handlePagination, isRecordNotFound,
        searchText, handleSearchText
      });
    }
  },[ records, order, orderBy, selected, pageNo, pageCount, isRecordNotFound, searchText ]);

  useEffect(() => {
    if(BodyData){
      setRecords(BodyData);
      setPageCount(pagination?.counts || 0);
    }
  }, [BodyData, (pagination?.counts || 0)]);

  return (
    <Card style={{margin: '50px'}}>
      <TableContainer>
        {enableSearch && (<SearchBar searchText={searchText} onSearchText={handleSearchText} />)}
        <Table size="small">
          <TableHeader 
            order={order}
            orderBy={orderBy}
            headLabel={HeadData}
            rowCount={records.length}
            numSelected={selected.length}
            onRequestSort={handleSortRequest}
            onSelectAllClick={handleSelectAllClick}
            enableSort={enableSort}
            enableSelect={enableSelect}
          />
          {isRecordNotFound ? (<NotFound isLoading={isLoading} colSpan={HeadData.length} />) :
            <TableBody>
              {(records || []).map((row, index) => {
                const isItemSelected = selected.indexOf(row.id) !== -1;            
                return (
                  <TableBodyRow 
                    key={index.toString()}
                    id={row.id}
                    isItemSelected={isItemSelected}
                    handleCheckboxClick={handleCheckboxClick}
                    RowItem={<RowItem item={row} index={index} />}
                    enableSelect={enableSelect}
                  />
                )
              })}
            </TableBody>
          }
        </Table>
      </TableContainer>
      
      {pagination && (
        <Pagination 
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '25px',
            borderTop: '1px solid silver'
          }}
          showFirstButton
          showLastButton
          count={Math.ceil(pageCount/(pagination?.interval || 20))}
          page={pageNo}
          onChange={handlePagination}
        />)
      }
    </Card>
  )
}