import actions from './actions';

type action = {
  type: string;
  payload?: any;
};

export const initialState = {
  is_connected: false,
  account: '',
  provider: null,
  network: null,
  eth_balance: null,
  dao_list: null,
  task_lists: [],
  loading: false,
};

export const reducer = (state: typeof initialState, action: action) => {
  switch (action.type) {
    case actions.LOGIN_WALLET:
      window.localStorage.setItem('shouldConnectMetamask', 'true');
      return {
        ...state,
        is_connected: true,
        account: action.payload.account,
        provider: action.payload.provider,
      };

    case actions.LOGOUT_WALLET:
      window.localStorage.removeItem('shouldConnectMetamask');
      return {
        ...state,
        is_connected: false,
        account: '',
        provider: null,
        network: null,
        eth_balance: null,
      };

    case actions.SET_DAO_LIST:
      return {
        ...state,
        dao_list: action.payload,
      };

    case actions.SET_TASK_LISTS:
      return {
        ...state,
        task_lists: action.payload,
      };

    default:
      return state;
  }
};
