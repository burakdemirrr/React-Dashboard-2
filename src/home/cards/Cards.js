import "./cards.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Cards = () => {
  const rows = [
    {
      COMPANIES: "Adobe ",
      MEMBERS: "227",
      BUDGET: "$14,000",
      COMPLETION: "65%",
  
    },
    {
        COMPANIES: "Apple",
        MEMBERS: "124",
        BUDGET: "$3,000",
        COMPLETION: "45%",
     
    },
    {
        COMPANIES: "Google",
        MEMBERS: "4",
        BUDGET: "$20,500",
        COMPLETION: "5%",
     
    },
  
   
  ];
  return (
      <div className="table">
    <TableContainer component={Paper} className="a">
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className="tableCell"><h3>COMPANIES</h3></TableCell>
            <TableCell className="tableCell"><h3>MEMBERS</h3></TableCell>
            <TableCell className="tableCell"><h3>BUDGET</h3></TableCell>
            <TableCell className="tableCell"><h3>COMPLETION</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} className="heh">
              <TableCell className="tableRaw">{row.COMPANIES}</TableCell>
              <TableCell className="tableRaw">
                <div className="tableRaw">
                  {row.MEMBERS}
                </div>
              </TableCell>
              <TableCell className="tableRaw">{row.BUDGET}</TableCell>
              <TableCell className="tableRaw e">{row.COMPLETION}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Cards;