
import PropTypes from 'prop-types';
// material
import { 
  TableHead, 
  TableCell, 
  TableRow, 
  Checkbox, 
  TableSortLabel,
  Box
} from '@material-ui/core';
import { visuallyHidden } from '@material-ui/utils';

TableHeader.propTypes = {
  order: PropTypes.oneOf(['asc','desc']),
  orderBy: PropTypes.string,
  headLabel: PropTypes.array,
  rowCount: PropTypes.number,
  numSelected: PropTypes.number,
  onRequestSort: PropTypes.func,
  onSelectAllClick: PropTypes.func,
  enableSort: PropTypes.bool,
  enableSelect: PropTypes.bool,
}
export default function TableHeader({
  order,
  orderBy,
  headLabel,
  rowCount,
  numSelected,
  onRequestSort,
  onSelectAllClick,
  enableSort,
  enableSelect
}) {
  return (
    <TableHead>
      <TableRow>
        {enableSelect && (
          <TableCell padding="checkbox">
            <Checkbox 
              indeterminate={(numSelected > 0) && (numSelected) < (rowCount)}
              checked={(rowCount > 0) && ((numSelected) === (rowCount))}
              onClick={onSelectAllClick}
            />
          </TableCell>
        )}
        {(headLabel || []).map((head) => (
          <TableCell
            key={head.id}
            sortDirection={orderBy === head.id ? order : false}
            style={head.style || {}}
          >
            {enableSort ? (
              <TableSortLabel
                hideSortIcon
                active={orderBy === head.id}
                direction={orderBy === head.id ? order : 'asc'}
                onClick={onRequestSort(head.id)}
              >
                {head.label} 
                {orderBy === head.id ? (
                  <Box sx={{...visuallyHidden}}>
                    {orderBy === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null }
              </TableSortLabel>)
            : head.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}