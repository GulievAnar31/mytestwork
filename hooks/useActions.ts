import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import actionCreaters from '../store/action-creaters';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreaters, dispatch);
};
