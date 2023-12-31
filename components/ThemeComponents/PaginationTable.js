import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

import {
  Card,
  CardContent,
  Typography,
  TableHead,
  Avatar,
  Chip,
} from "@mui/material";

import img1 from "../../assets/images/users/1.jpg";
import img2 from "../../assets/images/users/2.jpg";
import img3 from "../../assets/images/users/3.jpg";
import img4 from "../../assets/images/users/4.jpg";
import img5 from "../../assets/images/users/5.jpg";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const rows = [
  {
    orderno: "ORD - 0120145",
    items: "5",
    imgsrc: img1,
    customer: "Sunil Joshi",
    total: "550,000",
    status: "Completed",
    date: "10 Jun, 2021 09:51:40",
  },
  {
    orderno: "ORD - 0120146",
    items: "1",
    imgsrc: img2,
    customer: "John Deo",
    total: "45,000",
    status: "Pending",
    date: "10 Jun, 2021 07:46:00",
  },
  {
    orderno: "ORD - 0120460",
    items: "3",
    imgsrc: img3,
    customer: "Mily Peter",
    total: "57,000",
    status: "Cancel",
    date: "10 Jun, 2021 04:19:38",
  },
  {
    orderno: "ORD - 0124060",
    items: "11",
    imgsrc: img4,
    customer: "Andrew McDownland",
    total: "457,000",
    status: "Completed",
    date: "10 Jun, 2021 04:12:29",
  },
  {
    orderno: "ORD - 0124568",
    items: "4",
    imgsrc: img5,
    customer: "Christopher Jamil",
    total: "120,000",
    status: "Pending",
    date: "15 Apr, 2021 04:12:50",
  },
  {
    orderno: "ORD - 0120146",
    items: "1",
    imgsrc: img2,
    customer: "John Deo",
    total: "45,000",
    status: "Pending",
    date: "10 Jun, 2021 07:46:00",
  },
  {
    orderno: "ORD - 0120460",
    items: "3",
    imgsrc: img3,
    customer: "Mily Peter",
    total: "57,000",
    status: "Cancel",
    date: "10 Jun, 2021 04:19:38",
  },
  {
    orderno: "ORD - 0124060",
    items: "11",
    imgsrc: img4,
    customer: "Andrew McDownland",
    total: "457,000",
    status: "Completed",
    date: "10 Jun, 2021 04:12:29",
  },
  {
    orderno: "ORD - 0124568",
    items: "4",
    imgsrc: img5,
    customer: "Christopher Jamil",
    total: "120,000",
    status: "Pending",
    date: "15 Apr, 2021 04:12:50",
  },
  {
    orderno: "ORD - 0120145",
    items: "5",
    imgsrc: img1,
    customer: "Sunil Joshi",
    total: "550,000",
    status: "Completed",
    date: "10 Jun, 2021 09:51:40",
  },
  {
    orderno: "ORD - 0124060",
    items: "11",
    imgsrc: img4,
    customer: "Andrew McDownland",
    total: "457,000",
    status: "Completed",
    date: "10 Jun, 2021 04:12:29",
  },
  {
    orderno: "ORD - 0124568",
    items: "4",
    imgsrc: img5,
    customer: "Christopher Jamil",
    total: "120,000",
    status: "Pending",
    date: "15 Apr, 2021 04:12:50",
  },
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Pagination Table",
  },
];

const PaginationTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          sx={{
            overflow: {
              xs: "auto",
              sm: "unset",
            },
          }}
        >
          <Table
            aria-label="custom pagination table"
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h5">Order No.</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Customer</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Items</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Total</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="h5">Date</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Status</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="h5">{row.orderno}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={row.imgsrc}
                        alt={row.imgsrc}
                        width="30"
                        sx={{
                          borderRadius: "100%",
                        }}
                      >
                        {row.customer[0]}
                      </Avatar>
                      <Box
                        sx={{
                          ml: 2,
                        }}
                      >
                        <Typography variant="h6" fontWeight="600">
                          {row.customer}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      fontWeight="400"
                    >
                      {row.items}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      fontWeight="400"
                    >
                      ${row.total}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="h6">{row.date}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        backgroundColor:
                          row.status === "Completed"
                            ? (theme) => theme.palette.success.light
                            : row.status === "Pending"
                            ? (theme) => theme.palette.warning.light
                            : row.status === "Cancel"
                            ? (theme) => theme.palette.error.light
                            : (theme) => theme.palette.secondary.light,
                        color:
                          row.status === "Completed"
                            ? (theme) => theme.palette.success.main
                            : row.status === "Pending"
                            ? (theme) => theme.palette.warning.main
                            : row.status === "Cancel"
                            ? (theme) => theme.palette.error.main
                            : (theme) => theme.palette.secondary.main,
                        borderRadius: "6px",
                        pl: "3px",
                        pr: "3px",
                      }}
                      size="small"
                      label={row.status}
                    ></Chip>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={6}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputprops: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PaginationTable;
