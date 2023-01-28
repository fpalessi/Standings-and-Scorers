import useStats from "../hooks/useStats";
import ScorersItem from "./ScorersItem";

const ScorersList = () => {
  const { playerStats } = useStats();

  console.log(playerStats);

  if (playerStats.length === 0) {
    return "";
  }

  const forTopScorerItem = playerStats?.map((player, index) => {
    const position = index + 1;
    return (
      <ScorersItem
        rank={position}
        key={player.player.id}
        photo={player.player.photo}
        name={player.player.name}
        goals={player.statistics[0].goals.total}
        assists={player.statistics[0].goals.assists}
        game={player.statistics[0].games.appearences}
        team={player.statistics[0].team.name}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Goles</th>
          <th>Asistencias</th>
          <th>Partidos</th>
          <th>Equipo</th>
        </tr>
      </thead>
      <tbody>{forTopScorerItem}</tbody>
    </table>
  );
};

export default ScorersList;
