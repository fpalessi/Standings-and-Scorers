import useStanding from "../hooks/useStanding";
import Table from "react-bootstrap/Table";
import StandingItem from "./StandingItem";
import "animate.css";

const StandingList = () => {
  const { leagueStandings } = useStanding();
  console.log(leagueStandings);

  if (leagueStandings.length === 0) {
    return "";
  }

  return (
    <Table bordered className="table animate__animated animate__backInLeft">
      <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Club</th>
          <th>Partidos</th>
          <th>Victorias</th>
          <th>Empates</th>
          <th>Derrotas</th>
        </tr>
      </thead>
      <tbody>
        {leagueStandings.map((standing) => (
          <StandingItem key={standing.team.name} standing={standing} />
        ))}
      </tbody>
    </Table>
  );
};

export default StandingList;
