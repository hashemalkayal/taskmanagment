import { IinitialState, IReduxActions } from "../../types/types";
import {
  CLEAR_ALL_TASK,
  REMOVE_TASK,
  SAVE_NEW_TASK,
  UPDATE_LIST,
  UPDATE_TASK,
} from "../actions/appActions";

const initialState: IinitialState = {
  todoList: [],
};

const UserReducer = (
  State: IinitialState = initialState,
  action: IReduxActions
) => {
  switch (action.type) {
    case SAVE_NEW_TASK: {
      return {
        ...State,
        todoList: [
          ...State.todoList,
          { title: action.payload.text, status: action.payload.status },
        ],
      };
    }

    case UPDATE_TASK: {
      const tempTodoList = [...State.todoList];
      tempTodoList[action.payload.index] = {
        title: tempTodoList[action.payload.index].title,
        status: action.payload.status,
      };

      return {
        ...State,
        todoList: tempTodoList,
      };
    }

    case REMOVE_TASK: {
      const tempTodoList = [...State.todoList];
      tempTodoList.splice(action.payload.index, 1);

      return {
        ...State,
        todoList: tempTodoList,
      };
    }

    case UPDATE_LIST: {
      return {
        ...State,
        todoList: action.payload,
      };
    }

    case CLEAR_ALL_TASK: {
      return {
        ...State,
        todoList: [],
      };
    }

    default:
      return State;
  }
};
export default UserReducer;
