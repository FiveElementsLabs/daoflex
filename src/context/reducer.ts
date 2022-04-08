import actions from './actions';

type action = {
  type: string;
  payload?: any;
};

export const initialState = {
  count: 0,
};

export const reducer = (state: typeof initialState, action: action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};
