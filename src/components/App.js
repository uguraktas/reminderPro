import React, { Component } from 'react';
import '../App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="h5">Reminder Pro</div>
          <hr />
          <div className="form-inline">
            <input className="form-control" placeholder="Yapılacak birşeyler ekle..." />
            <button type="button" className="btn btn-success mx-2">Ekle</button>
          </div>
        </div>

      </div>
    )
  }
}

export default App;