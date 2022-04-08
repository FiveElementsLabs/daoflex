import { removeAuthenticationToken } from '../../lib/localStorage';

export const logout = () => {
  removeAuthenticationToken();
  return 'Logout successful';
};
