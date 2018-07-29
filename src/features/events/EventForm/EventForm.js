import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
export default class EventForm extends Component {
  state = {
    event: {
      title: '',
      date: '',
      city: '',
      venue: '',
      hostedBy: ''
    }
  };

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
    console.log(this.state.event);
    this.props.handleCreateEvent({ ...this.state.event });
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
              value={this.state.title}
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
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              onChange={this.handleChange}
              name="city"
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              onChange={this.handleChange}
              name="venue"
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.handleChange}
              placeholder="Enter the name of person hosting"
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
