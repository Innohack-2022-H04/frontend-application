import { useInjectReducer } from 'utils/redux-injectors';
import { name, themeActions, reducer } from './slice';

export const useThemeSlice = () => {
  useInjectReducer({ key: name, reducer });
  return { actions: themeActions, name };
};
