import React, { Component } from 'react';
import { Form, Segment, Button, Grid, Header } from 'semantic-ui-react';
import { validate } from './EventFormValidation';
import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { reduxForm, Field } from 'redux-form';
import TextInput from '../../../common/form/TextInput';
import TextArea from '../../../common/form/TextArea';
import SelectInput from '../../../common/form/SelectInput';
import DateInput from '../../../common/form/DateInput';
import moment from 'moment';

import cuid from 'cuid';

const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' }
];

class EventForm extends Component {
  handleChange = evt => {
    const { name, value } = evt.target;
    const event = { ...this.state.event };
    event[name] = value;
    this.setState({
      event
    });
  };

  onFormSubmit = values => {
    //console.log(values);
    // e.preventDefault();
    // if (this.state.event.id) {
    //   //we know this is an update if it has an id
    //   //this should be this.props.updateEvent as the handleUpdateEvent
    //   //is the actual method that handles it.
    //   this.props.updateEvent(this.state.event);
    //   this.props.history.goBack();
    // } else {
    //   this.props.createEvent({
    //     ...this.state.event,
    //     id: cuid(),
    //     hostPhotoURL: '/assets/user.png'
    //   });
    //   this.props.history.push('/events');
    // }

    //console.log(this.myRef.current.value);
    // e.preventDefault();
    values.date = moment(values.date).format();
    if (this.props.initialValues.id) {
      //we know this is an update if it has an id
      //this should be this.props.updateEvent as the handleUpdateEvent
      //is the actual method that handles it.
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      this.props.createEvent({
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      });
      this.props.history.push('/events');
    }
  };

  //myRef = React.createRef(); //ref={this.myRef}

  render() {
    //const { handleCancel } = this.props;
    const { pristine, submitting, invalid } = this.props;

    //dateFormat="YYYY/MM/DD HH:mm" does not workl

    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your event a title!"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is your event about?"
              />
              <Field
                name="description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us about your event"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Event City"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Event Venue"
              />
              <Field
                name="date"
                type="text"
                component={DateInput}
                placeholder="Date and time of event"
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
              />

              <Button
                disabled={pristine || submitting || invalid}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.find(event => event.id === eventId);
  }
  return { initialValues: event };
};

//use compose to tidy this up.
export default connect(
  mapStateToProps,
  { createEvent, updateEvent }
)(
  reduxForm({ form: 'eventForm', enableReinitialize: true, validate })(
    EventForm
  )
);
