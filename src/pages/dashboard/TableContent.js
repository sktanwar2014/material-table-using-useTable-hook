import { TableCell } from '@material-ui/core';


export const TableHeader = [
  {id: 'id', label: 'ID', style: {}},
  {id: 'first_name', label: 'First Name', style: {}},
  {id: 'last_name', label: 'Last Name', style: {}},
  {id: 'email', label: 'Email', style: {}},
  {id: 'status', label: 'Status', style: {}}
];

export const EmployeeList = [
  { id: '1', first_name: 'Shahrukh', last_name: 'Khan', status: 'Active', email: 'sk@gmail.com' },
  { id: '2', first_name: 'Venum', last_name: 'Tylor', status: 'Active', email: 'venum@tylor.com' },
  { id: '3', first_name: 'Progym', last_name: 'Rai', status: 'Active', email: 'pro@gmail.com' },
  { id: '4', first_name: 'Ageta', last_name: 'Ross', status: 'Active', email: 'ageta@yahoo.in' },
  { id: '5', first_name: 'Ricky', last_name: 'Ponting', status: 'Active', email: 'jai@gmail.com' },
  { id: '6', first_name: 'Rohit', last_name: 'Sharma', status: 'Active', email: 'info@justart.dev.com' },
  { id: '7', first_name: 'Shahrukh', last_name: 'Khan', status: 'Active', email: 'sk@gmail.com' },
  { id: '8', first_name: 'Venum', last_name: 'Tylor', status: 'Active', email: 'venum@tylor.com' },
  { id: '9', first_name: 'Progym', last_name: 'Rai', status: 'Active', email: 'pro@gmail.com' },
  { id: '10', first_name: 'Ageta', last_name: 'Ross', status: 'Active', email: 'ageta@yahoo.in' },
  { id: '11', first_name: 'Ricky', last_name: 'Ponting', status: 'Active', email: 'jai@gmail.com' },
  { id: '12', first_name: 'Rohit', last_name: 'Sharma', status: 'Active', email: 'info@justart.dev.com' },
  { id: '13', first_name: 'Shahrukh', last_name: 'Khan', status: 'Active', email: 'sk@gmail.com' },
  { id: '14', first_name: 'Venum', last_name: 'Tylor', status: 'Active', email: 'venum@tylor.com' },
  { id: '15', first_name: 'Progym', last_name: 'Rai', status: 'Active', email: 'pro@gmail.com' },
  { id: '16', first_name: 'Ageta', last_name: 'Ross', status: 'Active', email: 'ageta@yahoo.in' },
  { id: '17', first_name: 'Ricky', last_name: 'Ponting', status: 'Active', email: 'jai@gmail.com' },
  { id: '18', first_name: 'Rohit', last_name: 'Sharma', status: 'Active', email: 'info@justart.dev.com' },
  { id: '19', first_name: 'Shahrukh', last_name: 'Khan', status: 'Active', email: 'sk@gmail.com' },
  { id: '20', first_name: 'Venum', last_name: 'Tylor', status: 'Active', email: 'venum@tylor.com' },
  { id: '21', first_name: 'Progym', last_name: 'Rai', status: 'Active', email: 'pro@gmail.com' },
  { id: '22', first_name: 'Ageta', last_name: 'Ross', status: 'Active', email: 'ageta@yahoo.in' },
  { id: '23', first_name: 'Ricky', last_name: 'Ponting', status: 'Active', email: 'jai@gmail.com' },
  { id: '64', first_name: 'Rohit', last_name: 'Sharma', status: 'Active', email: 'info@justart.dev.com' },
  { id: '125', first_name: 'Shahrukh', last_name: 'Khan', status: 'Active', email: 'sk@gmail.com' },
  { id: '268', first_name: 'Venum', last_name: 'Tylor', status: 'Active', email: 'venum@tylor.com' },
  { id: '354', first_name: 'Progym', last_name: 'Rai', status: 'Active', email: 'pro@gmail.com' },
  { id: '464', first_name: 'Ageta', last_name: 'Ross', status: 'Active', email: 'ageta@yahoo.in' },
  { id: '50', first_name: 'Ricky', last_name: 'Ponting', status: 'Active', email: 'jai@gmail.com' },
  { id: '60', first_name: 'Rohit', last_name: 'Sharma', status: 'Active', email: 'info@justart.dev.com' },
];

export const TableRowItem = ({ item, index }) => {
  return (
    <>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.first_name}</TableCell>
      <TableCell>{item.last_name}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.status}</TableCell>
    </>
  )
}