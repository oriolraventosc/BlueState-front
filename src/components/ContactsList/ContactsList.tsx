import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Link,
  Pagination,
  ThemeProvider,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  Box,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useBusiness from "../../hooks/useBusiness/useBusiness";
import { useAppSelector } from "../../redux/hooks";
import MainTheme from "../../styles/mainTheme";
import TableBodyStyled from "./PaperStyled";
import { useEffect, useState } from "react";

const ContactsList = (): JSX.Element => {
  const navigate = useNavigate();
  const { loadAllContacts, deleteContact, loadContactsBySector } =
    useBusiness();
  const contacts = useAppSelector(
    ({ contactsActions }) => contactsActions.contacts
  );
  const [page, setPage] = useState(1);
  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const [sector, setSector] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSector(event.target.value as string);
  };
  useEffect(() => {
    loadAllContacts(page);
  }, [loadAllContacts, page]);
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            paddingBottom: "10px",
            gap: "10px",
          }}
        >
          <Button
            onClick={() => loadAllContacts(page)}
            sx={{
              height: "56px",
            }}
          >
            Show all
          </Button>
          <Box sx={{ height: "100%", borderRadius: "0px 10px 10px 0px" }}>
            <FormControl
              sx={{ minWidth: 120, borderRadius: "0px 10px 10px 0px" }}
            >
              <InputLabel id="demo-simple-select-label">Sector</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sector}
                label="Sector"
                onChange={handleChange}
              >
                <MenuItem
                  onClick={() => loadContactsBySector("Marketing")}
                  value={"Marketing"}
                >
                  Marketing
                </MenuItem>
                <MenuItem
                  onClick={() => loadContactsBySector("Technology")}
                  value={"Technology"}
                >
                  Technology
                </MenuItem>
                <MenuItem
                  onClick={() => loadContactsBySector("Medicine")}
                  value={"Medicine"}
                >
                  Medicine
                </MenuItem>
                <MenuItem
                  onClick={() => loadContactsBySector("Security systems")}
                  value={"Security systems"}
                >
                  Security systems
                </MenuItem>
                <MenuItem
                  onClick={() => loadContactsBySector("Construction")}
                  value={"Construction"}
                >
                  Construction
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Website</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Telephone</TableCell>
                <TableCell align="center">Service</TableCell>
                <TableCell align="center">Sector</TableCell>
                <TableCell align="center">Contacted</TableCell>
                <TableCell align="center">Logo</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBodyStyled>
              {contacts.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => navigate(`/contacts/contact/${row.id}`)}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: (MainTheme) =>
                        MainTheme.palette.secondary.contrastText,
                    }}
                  >
                    <Link href={row.website}>{row.website}</Link>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: (MainTheme) =>
                        MainTheme.palette.secondary.contrastText,
                    }}
                  >
                    <Link href={`mailto:${row.email}`}>{row.email}</Link>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: (MainTheme) =>
                        MainTheme.palette.secondary.contrastText,
                    }}
                  >
                    <Link href={`tel:${row.telephone}`}>{row.telephone}</Link>
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={() => navigate(`/contacts/contact/${row.id}`)}
                  >
                    {row.service}
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={() => navigate(`/contacts/contact/${row.id}`)}
                  >
                    {row.sector}
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={() => navigate(`/contacts/contact/${row.id}`)}
                  >
                    {row.contacted}
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={() => navigate(`/contacts/contact/${row.id}`)}
                  >
                    <a href={row.backUpLogo}>{row.backUpLogo}</a>
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={() => navigate(`/contacts/contact/${row.id}`)}
                  >
                    <Button onClick={() => deleteContact(row.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBodyStyled>
          </Table>
        </TableContainer>
        <Pagination
          count={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "20px",
            pb: "20px",
            color: "#2164d9",
          }}
          page={page}
          onChange={changePage}
        />
      </ThemeProvider>
    </>
  );
};
export default ContactsList;
