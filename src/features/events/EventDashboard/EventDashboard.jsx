import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { connect } from 'react-redux';
import { deleteEvent } from '../eventActions';

class EventDashboard extends Component {
  //{...object} == Object.assign({},updatedEvent)

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <h2>Event List</h2>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>

        <Grid.Column width={6} />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

// const mapDispatchToProps = dispatch => ({
//   createEvent: event => {
//     dispatch(createEvent(event));
//   }
// });

export default connect(
  mapStateToProps,
  { deleteEvent }
)(EventDashboard);
