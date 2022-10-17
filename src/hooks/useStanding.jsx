import { useContext } from "react";
import LeaguesContext from "../context/LeaguesProvider";

const useStanding = () => {
  return useContext(LeaguesContext);
};

export default useStanding;
