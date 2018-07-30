import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

//static properties
const events = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events,
    isOpen: false,
    selectedEvent: null
  };
  handleFormOpen() {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  }
  handleFormCancel() {
    this.setState({
      isOpen: false
    });
  }

  //{...object} == Object.assign({},updatedEvent)

  handleUpdateEvent = updatedEvent => {
    const events = this.state.events.map(event => {
      if (event.id === updatedEvent.id) {
        return { ...updatedEvent };
      } else {
        return event;
      }
    });
    this.setState({ events, isOpen: false, selectedEvent: null });
  };

  handleOpenEvent = eventToOpen => evt => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  handleDeleteEvent = eventId => () => {
    console.log('delete event called');
    const events = this.state.events.filter(event => event.id !== eventId);
    this.setState({
      events
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';

    const events = [...this.state.events, newEvent];
    this.setState({
      events,
      isOpen: false
    });
  };

  render() {
    const { selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <h2>Event List</h2>
          <EventList
            onEventOpen={this.handleOpenEvent}
            deleteEvent={this.handleDeleteEvent}
            events={this.state.events}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen.bind(this)}
            content="Create Event"
            positive
          />
          {this.state.isOpen && (
            <EventForm
              selectedEvent={selectedEvent}
              handleCreateEvent={this.handleCreateEvent}
              handleCancel={this.handleFormCancel.bind(this)}
              handleUpdateEvent={this.handleUpdateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
export default EventDashboard;
