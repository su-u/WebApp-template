import { Map } from 'immutable';

const init_state = Map({});

const app = (state: any, action: any) => {
  return state || init_state;
};

export default app;
