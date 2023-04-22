import './WidgetLarge.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function WidgetLarge() {


function createData(Customer,Date,Amount,Status) {
  return { Customer,Date,Amount,Status };
}

const rows = [
  createData(
  <div className='widgetLargeCustomerProfile'>
  <img src="https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" height={'40px'} width={"40px"} className='widgetLargeCustomerPhoto'/>
  <span className='widgetLargeCustomerName'>Sofia Ivanova</span>
  </div>, "April 9,2023", "35 267 ₽", "Approved"),

  createData(
  <div className='widgetLargeCustomerProfile'>
  <img src="https://images.unsplash.com/photo-1625241152315-4a698f74ceb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" height={'40px'} width={"40px"} className='widgetLargeCustomerPhoto'/>
  <span className='widgetLargeCustomerName'>Alexei Petrov</span>
  </div>, "April 9,2023", "9 432 ₽", "Declined"),

  createData(
  <div className='widgetLargeCustomerProfile'>
  <img src="https://images.unsplash.com/photo-1596591199390-8df08eae6d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="" height={'40px'} width={"40px"} className='widgetLargeCustomerPhoto'/>
  <span className='widgetLargeCustomerName'>Anastasia Mikhailova</span>
  </div>, "April 8,2023", "62 818 ₽", "Pending"),

  createData(
  <div className='widgetLargeCustomerProfile'>
  <img src="https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" height={'40px'} width={"40px"} className='widgetLargeCustomerPhoto'/>
  <span className='widgetLargeCustomerName'>Vladimir Kuznetsov</span>
  </div>,"April 8,2023", "17 593 ₽", "Approved"),
];

  return (
    <div className='widgetLarge'>
       <h3 className="widgetLargeTitle">Latest Transection</h3>
<TableContainer component={Paper} className='tableContainer'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='tableHead'>
          <TableRow>
            <TableCell align="left">Customer</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" >{row.Customer}</TableCell>
              <TableCell align="center">{row.Date}</TableCell>
              <TableCell align="center">{row.Amount}</TableCell>
              <TableCell align="center">{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
