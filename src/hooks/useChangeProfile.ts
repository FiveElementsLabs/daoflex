import { useSharedState } from '../context/store';
import actions from '../context/actions';

export const useChangeProfile = () => {
  const [_, dispatch] = useSharedState();

  const changeProfile = (profile: any) => {
    dispatch({
      type: actions.lens.SET_CURRENT_PROFILE,
      payload: profile,
    });
  };

  return { changeProfile };
};
