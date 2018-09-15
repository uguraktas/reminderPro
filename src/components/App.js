import React, { Component } from 'react';
import '../App.css';

import { connect } from 'react-redux'
import { addReminder } from '../actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',

    }
  }

  addReminder() {
    this.props.addReminder(this.state.text)
  }
  render() {
    console.log('this.props', this.props);
    return (
      <div className="App">
        <div className="container">
          <div className="h5">Reminder Pro</div>
          <hr />
          <div className="form-inline">
            <input onChange={event => this.setState({ text: event.target.value })} className="form-control" placeholder="Yapılacak birşeyler ekle..." />
            <button onClick={() => this.addReminder()} type="button" className="btn btn-success mx-2">Ekle</button>
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder })(App);