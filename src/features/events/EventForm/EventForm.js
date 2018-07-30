import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';

const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
};

export default class EventForm extends Component {
  state = {
    event: emptyEvent
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  //this will call two renders
  //we could look at the state
  componentDidUpdate(prevProps) {
    if (this.props.selectedEvent !== prevProps.selectedEvent) {
      this.setState({
        event: this.props.selectedEvent || emptyEvent
      });
    }
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    const event = { ...this.state.event };
    event[name] = value;
    this.setState({
      event
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.event.id) {
      //we know this is an update if it has an id
      //this should be this.props.updateEvent as the handleUpdateEvent
      //is the actual method that handles it.
      this.props.handleUpdateEvent(this.state.event);
    } else {
      this.props.handleCreateEvent({ ...this.state.event });
    }

    //console.log(this.myRef.current.value);
  };

  //myRef = React.createRef(); //ref={this.myRef}

  render() {
    const { handleCancel } = this.props;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              onChange={this.handleChange}
              value={this.state.event.title}
              placeholder="First Name"
              name="title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              onChange={this.handleChange}
              name="date"
              type="date"
              placeholder="Event Date"
              value={this.state.event.date}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              onChange={this.handleChange}
              name="city"
              placeholder="City event is taking place"
              value={this.state.event.city}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              onChange={this.handleChange}
              name="venue"
              placeholder="Enter the Venue of the event"
              value={this.state.event.venue}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.handleChange}
              placeholder="Enter the name of person hosting"
              value={this.state.event.hostedBy}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
