import "./App.css";
import Container from "react-bootstrap/Container";
import { LeaguesProvider } from "./context/StatsProvider";
import SoccerForm from "./components/SoccerForm";
import StandingList from "./components/StandingList";
import ScorersList from "./components/ScorersList";

const App = () => {
  return (
    <div className="App">
      <LeaguesProvider>
        <SoccerForm />
        <Container>
          <StandingList />
          <ScorersList />
        </Container>
      </LeaguesProvider>
    </div>
  );
};

export default App;
