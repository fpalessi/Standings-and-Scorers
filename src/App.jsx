import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LeaguesProvider } from "./context/LeaguesProvider";
import SoccerForm from "./components/SoccerForm";
import StandingList from "./components/StandingList";
import StandingItem from "./components/StandingItem";
import ScorersList from "./components/ScorersList";
import ScorersItem from "./components/ScorersItem";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <LeaguesProvider>
        <Navbar />
        <SoccerForm />
        <Container>
          <Row>
            <StandingList />
            <ScorersList />
          </Row>
          <Col>
            <StandingItem />
            <ScorersItem />
          </Col>
        </Container>
      </LeaguesProvider>
    </>
  );
};

export default App;
