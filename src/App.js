import React, {Component} from 'react'
import './App.css';
import { connect } from 'react-redux' 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import GoalForm from './containers/GoalForm'
import { fetchGoals } from './actions/actions.js'

class App extends Component {


  componentDidMount(){
    this.props.fetchGoals();
  }


  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path='/' component={Home} />
            <Route exact path='/goals' component={GoalForm} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default connect(null, {fetchGoals})(App)
