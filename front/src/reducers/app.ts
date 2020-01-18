import { Map } from 'immutable';

const initState = Map({});

// eslint-disable-next-line no-unused-vars
const app = (state: any, action: any) => {
  return state || initState;
};

export default app;
