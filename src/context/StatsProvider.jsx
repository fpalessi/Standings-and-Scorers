import { useState, createContext } from "react";
import axios from "axios";

const StatsContext = createContext();

const LeaguesProvider = ({ children }) => {
  const [leagueStandings, setleagueStandings] = useState([]);
  const [playerStats, setplayerStats] = useState([]);

  // const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
  // const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

  const config = {
    headers: {
      "x-rapidapi-key": "api-football-beta.p.rapidapi.com",
      "x-rapidapi-host": "6405731328msh3e91adde0edf0c4p17918ejsn6d34febc19b5",
    },
  };
  // Data from SoccerForm
  const getLeague = async (datos) => {
    try {
      const { year, league } = datos;
      const url = `https://api-football-beta.p.rapidapi.com/standings?season=${year}&league=${league}`;
      const response = await axios.get(url, config);
      console.log(config);
      console.log(response);
      setleagueStandings(response.data.response[0].league.standings[0]);
      console.log(response.data.response[0].league.standings[0]); //Array de objetos (20) [{...}[0], {...}[1], {...}[2]]
    } catch (error) {
      console.log(error);
    }
  };
  const getScorers = async (datos) => {
    try {
      const { year, league } = datos;
      const url = `https://api-football-beta.p.rapidapi.com/players/topscorers?season=${year}&league=${league}`;
      const response = await axios.get(url, config);
      setplayerStats(response.data.response);
      console.log(response.data.response); //Array de arrays de objetos 20 -> 0: {player: {...}, statistics: Array(1)}
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StatsContext.Provider
      value={{
        getLeague,
        getScorers,
        playerStats,
        leagueStandings,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};
export { LeaguesProvider };

export default StatsContext;
