import {
  TableBody,
  TableRow,
  TableCell,
  Typography
} from '@material-ui/core';

const NotFound = ({ isLoading = false, colSpan = 0}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" sx={{ py: 3}} colSpan={colSpan}>
          <Typography gutterBottom align="center" variant="subtitle1">
            {isLoading ? "Loading..." : "Not Found"}
          </Typography>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}

export default NotFound;