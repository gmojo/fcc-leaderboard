import React, { Component } from 'react';
import './App.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fccData: [],
    };
    this.loadData = this.loadData.bind(this);
  }

  //top 100 all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.
  //top 100 last 30 days: https://fcctop100.herokuapp.com/api/fccusers/top/recent
  loadData() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        let newData = data.map((user, index) => {
          return {
            rank: index+1,
            username: user.username,
            recent: user.recent,
            alltime: user.alltime
          }
        })
        this.setState({
          fccData: newData,
        });
      })    
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    let data = this.state.fccData;
    return (
      <div className="App">
        <h1>FreeCodeCamp Leaderboard</h1>
        <h4>Top campers in the last 30 days</h4>

        <div className="container">
          <BootstrapTable ref='table' data={ data } striped hover condensed>
              <TableHeaderColumn dataField='rank' isKey={ true }>Rank</TableHeaderColumn>
              <TableHeaderColumn dataField='username' dataSort={ true }>Username</TableHeaderColumn>
              <TableHeaderColumn dataField='recent' dataSort={ true }>Recent</TableHeaderColumn>
              <TableHeaderColumn dataField='alltime' dataSort={ true }>All Time</TableHeaderColumn>
          </BootstrapTable>
        </div>

      </div>
    );
  }
}

export default App;
