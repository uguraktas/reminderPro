import React, { Component } from 'react';
import '../App.css';
import moment from 'moment'
import { connect } from 'react-redux'
import { addReminder, deleteReminder } from '../actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate)
    console.log(this.state.dueDate)
  }
  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item"> {reminder.text} <br/> <em> {moment(new Date(reminder.dueDate)).fromNow()} </em></div>
                
                <div onClick={() => this.deleteReminder(reminder.id)} className="list-item btn btn-danger">X</div>
              </li>
            )
          })
        }
      </ul>
    )
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
            <input onChange={event => this.setState({dueDate: event.target.value})} className="form-control" type="datetime-local"/>
            <button onClick={() => this.addReminder()} type="button" className="btn btn-success mx-2">Ekle</button>
          </div>
          {this.renderReminders()}
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

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);