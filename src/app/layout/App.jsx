import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/events/EventForm/EventForm';
import Home from '../../features/home/Home';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route
          path="/(.+)"
          render={() => (
            <Container className="main">
              <NavBar />
              <Switch>
                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
                <Route render={() => <h1>Not found</h1>} />
              </Switch>
            </Container>
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
