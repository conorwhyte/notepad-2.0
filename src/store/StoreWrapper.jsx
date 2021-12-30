import { useReducer } from 'react';
import { initialState, Reducer } from './state';
import { AppContext } from './appContext';

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
      <AppContext.Provider value={[state, dispatch]}>
        {children}
      </AppContext.Provider>
  );
}

export default Store;