import "./App.css";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Appbar from "./Components/Appbar/Appbar.js";
import Reducers from "./Reducers/index.js";
import ControlPanelContainer from "./Components/ControlPanel/Container/ControlPanel.js";
import BoardBody from "./Components/Board/Container/Board.js";
import Store from "./Store/Store.js";
import React, {Component} from "react";
import Statistics from "./Components/Statistics/Container/Statistics.js";







/* The App class is the main component of the application. It renders the Appbar, BoardBody,
Statistics, and ControlPanelContainer components */
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <Appbar></Appbar>
          <BoardBody></BoardBody>
          <Statistics></Statistics>
          <ControlPanelContainer></ControlPanelContainer>
        </div>
      </Provider>
    );
  }
}

export default App;