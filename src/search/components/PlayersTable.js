import React from "react";
import {Alert, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {filteredPlayersSelector} from "../selectors";
import {playerAge} from "../helpers";

const PlayerTableComponent = ({players}) => {
  if (players.length === 0)
    return <Alert variant={"info"} >No player matches with this filters</Alert>
  return <Table striped bordered hover>
    <thead>
    <tr>
      <th>Player Name</th>
      <th>Position</th>
      <th>Nationality</th>
      <th>Age</th>
    </tr>
    </thead>
    <tbody>
    {players.map((player) => (
      <tr key={player.jerseyNumber}>
        <td>{player.name}</td>
        <td>{player.position}</td>
        <td>{player.nationality}</td>
        <td>{playerAge(player)}</td>
      </tr>
    ))}
    </tbody>
  </Table>;
}

export const PlayerTable = connect(
  state => ({players: filteredPlayersSelector(state)})
)(PlayerTableComponent);