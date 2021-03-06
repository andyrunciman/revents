import { createReducer } from '../../common/util/reducerUtil';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants';

const initialState = [
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

export const createEvent = (state, payload) => {
  return [...state, { ...payload.event }];
  //dont really need to spread the event here unless we are worried that it referes to the original object
  //or return state.concat(Object.assign({},payload.event));
};

export const updateEvent = (state, payload) => {
  return state.map(event => {
    if (event.id === payload.event.id) {
      return { ...payload.event };
    } else {
      return event;
    }
  });
};

export const deleteEvent = (state, payload) =>
  state.filter(event => payload.eventId !== event.id);

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [DELETE_EVENT]: deleteEvent,
  [UPDATE_EVENT]: updateEvent
});
