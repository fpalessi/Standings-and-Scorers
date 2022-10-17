const StandingItem = ({ standing }) => {
  return (
    <tr>
      <td>{standing?.rank}</td>{" "}
      <td>
        <img src={standing?.team.logo} width={30} />
      </td>
      <td>{standing?.team.name}</td>
      <td>{standing?.all.played}</td>
      <td>{standing?.all.win}</td>
      <td>{standing?.all.draw}</td>
      <td>{standing?.all.lose}</td>
    </tr>
  );
};

export default StandingItem;
