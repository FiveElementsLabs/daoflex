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
    // case actions.lens.SET_CURRENT_PROFILE:
    //   return {
    //     ...state,
    //     current_profile: action.payload,
    //   };

    // case actions.lens.SET_ALL_PROFILES:
    //   return {
    //     ...state,
    //     all_profiles: action.payload,
    //   };

    default:
      return state;
  }
};
