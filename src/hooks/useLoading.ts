import actions from '../context/actions';
import { useSharedState } from '../context/store';

export const useLoading = () => {
  const [, dispatch] = useSharedState();

  const loading = async (sec: number) => {
    dispatch({ type: actions.SET_LOADING, payload: true });
    await new Promise(resolve => setTimeout(resolve, sec * 1000));
    dispatch({ type: actions.SET_LOADING, payload: false });
  };

  return { loading };
};
