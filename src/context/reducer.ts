import actions from './actions';

type action = {
  type: string;
  payload?: any;
};

export const initialState = {
  profile: null,
  all_profiles: [],
};

export const reducer = (state: typeof initialState, action: action) => {
  switch (action.type) {
    case actions.lens.LOGIN:
      return {
        ...state,
        profile: action.payload,
      };

    case actions.lens.LOGOUT:
      return {
        ...state,
        profile: null,
      };

    case actions.lens.SET_ALL_PROFILES:
      return {
        ...state,
        all_profiles: action.payload,
      };

    default:
      return state;
  }
};
