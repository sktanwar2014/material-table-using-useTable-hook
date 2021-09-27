import PropTypes from 'prop-types';

// material
import { 
  TableRow, 
  Checkbox,
  TableCell
} from '@material-ui/core';

TableBodyRow.propTypes = {
  id: PropTypes.any,
  isItemSelected: PropTypes.bool,
  handleCheckboxClick: PropTypes.func,
  RowItem: PropTypes.element,
  enableSelect: PropTypes.bool,
}

export default function TableBodyRow ({
  id,
  isItemSelected,
  handleCheckboxClick,
  RowItem,
  enableSelect
}) {
  return (
    <TableRow
      hover
      key={String(id)}
      tabIndex={-1}
      role="checkbox"
      aria-checked={isItemSelected}
      selected={isItemSelected}
    >
      {enableSelect && (
        <TableCell padding="checkbox">
          <Checkbox 
            checked={isItemSelected}
            onClick={(e)=> handleCheckboxClick(e, id)}
          />
        </TableCell>
      )}
      {RowItem}      
    </TableRow>
  )
}