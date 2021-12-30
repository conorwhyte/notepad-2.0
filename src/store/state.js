import { CHANGE_VALUE } from './actions';

export const initialState = {
    value: '',
};

export function Reducer(state, action) {
  switch (action.type) {
    case CHANGE_VALUE: 
        return {
            ...state,
            value: action.value,
        };
    default:
      throw new Error('Unknown action');
  }
}