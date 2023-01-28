import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import { leagues, years } from "../data";
import useStats from "../hooks/useStats";

const SoccerForm = () => {
  const [search, setSearch] = useState({
    league: "",
    year: "",
  });
  const [alert, setAlert] = useState("");

  const { getLeague, getScorers } = useStats();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Las tablas se rellenarán cuando elijas una liga y un año");
      return;
    }
    // Limpiar alerta
    setAlert("");
    console.log(search);
    // Consultar API
    getLeague(search);
    getScorers(search);
  };

  return (
    <Form style={{ margin: "30px" }} onSubmit={handleSubmit} sm={12}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label
              htmlFor="league"
              style={{ fontWeight: "700", color: "#fff" }}
            >
              Liga
            </Form.Label>
            <Form.Select
              id="league"
              name="league"
              style={{ color: "gray" }}
              value={search.league}
              onChange={(e) =>
                setSearch({ ...search, [e.target.name]: e.target.value })
              }
            >
              {" "}
              <option>Selecciona una liga</option>
              {leagues.map((league) => (
                <option key={league.id} value={league.id}>
                  {league.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label
              htmlFor="year"
              style={{ fontWeight: "700", color: "#fff" }}
            >
              Año
            </Form.Label>
            <Form.Select
              id="year"
              name="year"
              style={{ color: "gray" }}
              value={search.year}
              onChange={(e) =>
                setSearch({ ...search, [e.target.name]: e.target.value })
              }
            >
              <option>Selecciona un año</option>
              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button type="submit">Buscar Clasificación y Goleadores</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SoccerForm;
