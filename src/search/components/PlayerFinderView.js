import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import {PlayerNameField} from "./PlayerNameField";
import {PlayerPositionSelector} from "./PlayerPositionSelector";
import {PlayerAgeField} from "./PlayerAgeField";
import {PlayerTable} from "./PlayersTable";
import {connect} from "react-redux";
import {fetchPlayersAction} from "../actions";

export const PlayerFinderViewComponent = ({players, fetchData}) => {
  if(players.length === 0) {
    fetchData()
    return <h2>Fetching Data</h2>
  }
  return <React.Fragment>
    <h1>Football Player Finder</h1>
    <Form>
      <Row>
        <Col>
          <PlayerNameField/>
        </Col>
        <Col>
          <PlayerPositionSelector/>
        </Col>
        <Col>
          <PlayerAgeField/>
        </Col>
      </Row>
    </Form>
    <PlayerTable/>
  </React.Fragment>;
}

export const PlayerFinderView = connect(
  state => ({ players: state.players}),
  dispatch => ({ fetchData: () => dispatch(fetchPlayersAction())})
)(PlayerFinderViewComponent)