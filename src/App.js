import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./search/store";
import {Container} from "react-bootstrap";
import "bootstrap/scss/bootstrap.scss";
import {PlayerFinderView} from "./search/components/PlayerFinderView";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <PlayerFinderView/>
      </Container>
    </Provider>
  );
}

export default App;
