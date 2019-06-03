import React from "react";
import {Table} from "react-bootstrap";
import {connect} from "react-redux";

const PlayerTableComponent = ({players}) =>
  <Table striped bordered hover>
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
      <tr>
        <td>{player.name}</td>
        <td>{player.position}</td>
        <td>{player.nationality}</td>
        <td>{player.dateOfBirth}</td>
      </tr>
    ))}
    </tbody>
  </Table>

export const PlayerTable = connect(
  state => ({players: state.players})
)(PlayerTableComponent);