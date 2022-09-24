import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import './purchase_table.css'
import { CellWrapper, Image, Status } from "./latestTransactionsStyle";
import useDarkMode from '../../hooks/useDarkMode'

const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

const PurchaseTable = () => {
  const {darkMode} = useDarkMode()
  return (
    <TableContainer component={Paper} style={{backgroundColor: darkMode && '#111'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color: darkMode && 'gray'}}>Tracking ID</TableCell>
            <TableCell style={{color: darkMode && 'gray'}}>Product</TableCell>
            <TableCell style={{color: darkMode && 'gray'}}>Customer</TableCell>
            <TableCell style={{color: darkMode && 'gray'}}>Date</TableCell>
            <TableCell style={{color: darkMode && 'gray'}}>Amount</TableCell>
            <TableCell style={{color: darkMode && 'gray'}}>Payment Method</TableCell>
            <TableCell style={{color: darkMode && 'gray'}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{color: darkMode && 'gray'}}>{row.id}</TableCell>
              <TableCell style={{color: darkMode && 'gray'}}>
                {/* <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div> */}
                <CellWrapper>
                    <Image src={row.img} alt='' />
                    {row.product}
                </CellWrapper>
              </TableCell>
              <TableCell style={{color: darkMode && 'gray'}}>{row.customer}</TableCell>
              <TableCell style={{color: darkMode && 'gray'}}>{row.date}</TableCell>
              <TableCell style={{color: darkMode && 'gray'}}>{row.amount}</TableCell>
              <TableCell style={{color: darkMode && 'gray'}}>{row.method}</TableCell>
              <TableCell style={{color: darkMode && 'gray'}}>
                {/* <span className={`status ${row.status}`}>{row.status}</span> */}
                <Status className={row.status}>{row.status}</Status>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PurchaseTable