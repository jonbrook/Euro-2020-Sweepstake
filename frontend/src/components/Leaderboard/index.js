import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { getLeaderboard } from "../../httpClient/axios";
import "./style.css";

function Leaderboard({ pool }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getLeaderboard(pool);
      setData(res.data);
    })();
  }, [pool]);

  return (
    <div>
      {data.length ? (
        <Container>
          <Typography variant="h5">Leaderboard</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead className="leaderboard__tablehead">
                <TableRow>
                  <TableCell className="leaderboard__tableheadtext">
                    Name
                  </TableCell>
                  <TableCell
                    className="leaderboard__tableheadtext"
                    align="right"
                  >
                    Score
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.user.name}>
                    <TableCell component="th" scope="row">
                      {row.user.name}
                    </TableCell>
                    <TableCell align="right">{row.totalPoints}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      ) : null}
    </div>
  );
}

export default Leaderboard;
