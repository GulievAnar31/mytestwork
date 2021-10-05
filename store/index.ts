import { createStore, AnyAction, Store, applyMiddleware,  } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { reducer, RootState } from './reducers';
import thunk from 'redux-thunk';

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });




