import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import initialState from './initialState';
import { addTask, removeTask, changeTask } from './todo/actionCreators';

const StateContext = React.createContext({});

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    addTask: (payload) => dispatch(addTask(payload)),
    removeTask: (payload) => dispatch(removeTask(payload)),
    changeTask: (payload) => dispatch(changeTask(payload)),
  };

  return (
    <StateContext.Provider value={{ state, actions }}>
      {children}
    </StateContext.Provider>
  );
};

const useStateActions = () => useContext(StateContext).actions;

const useStateSelector = (selector) => {
  const { state } = useContext(StateContext);

  if (!selector) return state;
  else if (typeof selector !== 'function')
    throw new Error('Selector must be a function');
  else {
    return selector(state);
  }
};

export { StateProvider, useStateActions, useStateSelector };
