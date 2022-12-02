import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { githubRepoFormSaga } from './saga';
import { name, githubRepoFormActions, reducer } from './slice';

export const useGithubRepoFormSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: githubRepoFormSaga });
  return { actions: githubRepoFormActions, name };
};
