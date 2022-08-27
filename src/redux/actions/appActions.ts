import { IListTaskDto } from "../../types/types";

export const SAVE_NEW_TASK = "SAVE_NEW_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const CLEAR_ALL_TASK = "CLEAR_ALL_TASK";
export const UPDATE_LIST = "UPDATE_LIST";

export const setAddTask = (text: string, status: number) => {
  return {
    type: SAVE_NEW_TASK,
    payload: {
      text,
      status,
    },
  };
};

export const updateTask = (status: number, index: number) => {
  return {
    type: UPDATE_TASK,
    payload: {
      status,
      index,
    },
  };
};

export const removeTask = (index: number) => {
  return {
    type: REMOVE_TASK,
    payload: index,
  };
};

export const updateList = (list: Array<IListTaskDto>) => {
  return {
    type: UPDATE_LIST,
    payload: list,
  };
};

export const clearTask = () => {
  return {
    type: CLEAR_ALL_TASK,
  };
};
