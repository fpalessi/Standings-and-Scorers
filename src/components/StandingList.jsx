import useStats from "../hooks/useStats";
import StandingItem from "./StandingItem";

const StandingList = () => {
  const { leagueStandings } = useStats();
  console.log(leagueStandings);

  if (leagueStandings.length === 0) {
    return "";
  }

  return (
    <table>
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
    </table>
  );
};

export default StandingList;
