const ScorersItem = ({ rank, photo, name, goals, assists, game, team }) => {
  return (
    <tr>
      <td>{rank}</td>{" "}
      <td>
        <img
          src={photo}
          width={30}
          style={{ borderRadius: "50px" }}
          loading="lazy"
        />
      </td>
      <td>{name}</td>
      <td>{goals}</td>
      <td>{assists === null ? "-" : assists}</td>
      <td>{game}</td>
      <td>{team}</td>
    </tr>
  );
};

export default ScorersItem;
