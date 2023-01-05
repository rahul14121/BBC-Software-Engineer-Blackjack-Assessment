import "./App.css";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Appbar from "./Components/Appbar/Appbar.js";
import Reducers from "./Reducers/index.js";
import ControlPanelContainer from "./Components/ControlPanel/Container/ControlPanel.js";
import BoardBody from "./Components/Board/Container/Board.js";
import Store from "./Store/Store.js";
import React, {Component} from "react";
import Summary from "./Components/Summary/Container/Summary.js";
import WelcomeMessage from "./Components/WelcomeMessage/Presentation/WelcomeMessage.js";
import StatisticsContainer from "./Components/Statistics/Container/Statistics.js";







/* The App class is the main component of the application. It renders the Appbar, WelcomeMessage,
BoardBody, Summary, ControlPanelContainer, and StatisticsContainer components */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { init: true };
  }
  
  startGame = () => {
    this.setState((state, props) => {
        return { init: false };
    });
  }
  
  render() {
    const { init } = this.state;
  
    const blackjack = (
        <div className={'center-panel'}>
          <div className={'center-panel-content'}>
            <BoardBody></BoardBody>
            <Summary></Summary>
            <ControlPanelContainer></ControlPanelContainer>
            <StatisticsContainer></StatisticsContainer>
            </div>
        </div>
    );
  
    return (
        <Provider store={Store}>
            <div className='App'>
                <Appbar></Appbar>
                {init ? <WelcomeMessage onStartClick={this.startGame} open={init} /> : blackjack}
            </div>
        </Provider>
    );
  }
}

export default App;

