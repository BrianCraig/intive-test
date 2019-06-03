import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import {PlayerNameField} from "./PlayerNameField";
import {PlayerPositionSelector} from "./PlayerPositionSelector";
import {PlayerAgeField} from "./PlayerAgeField";
import {PlayerTable} from "./PlayersTable";

export const PlayerFinderView = () =>
  <React.Fragment>
    <h1>Football Player Finder</h1>
    <Form>
      <Row>
        <Col>
          <PlayerNameField />
        </Col>
        <Col>
          <PlayerPositionSelector />
        </Col>
        <Col>
          <PlayerAgeField />
        </Col>
      </Row>
    </Form>
    <PlayerTable />
  </React.Fragment>