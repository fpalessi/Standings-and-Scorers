import { useContext } from "react";
import LeaguesContext from "../context/StatsProvider";

const useStats = () => {
  return useContext(LeaguesContext);
};

export default useStats;
