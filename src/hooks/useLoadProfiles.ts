import { useEffect } from 'react';
import { useEthers } from '@usedapp/core';

import { getProfiles } from '../api/profile/get-profiles';
import { useSharedState } from '../context/store';
import actions from '../context/actions';

export const useLoadProfiles = () => {
  const { account, library } = useEthers();
  const [dispatch] = useSharedState();

  useEffect(() => {
    if (account && library) {
      getProfiles(account, library.getSigner()).then(res => {
        // Set all the profiles in state.
        dispatch({
          type: actions.lens.SET_ALL_PROFILES,
          payload: res.profiles.items,
        });

        // Set the first profile as selected.
        // TODO: Use localStorage to remember the last selected profile.
        dispatch({
          type: actions.lens.SET_CURRENT_PROFILE,
          payload: res.profiles.items[0],
        });
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
