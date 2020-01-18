import { Map } from 'immutable';

const init_state = Map({});

// eslint-disable-next-line no-unused-vars
const app = (state: any, action: any) => {
  return state || init_state;
};

export default app;
