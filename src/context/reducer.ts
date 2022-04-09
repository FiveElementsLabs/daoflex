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

    default:
      return state;
  }
};
