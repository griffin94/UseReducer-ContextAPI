import { ADD_TASK, REMOVE_TASK, CHANGE_TASK } from './actionTypes';

export const addTask = (payload) => ({ type: ADD_TASK, payload });
export const removeTask = (payload) => ({ type: REMOVE_TASK, payload });
export const changeTask = (payload) => ({ type: CHANGE_TASK, payload });
