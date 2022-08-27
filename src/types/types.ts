export interface IListTaskDto {
  title?: string;
  status?: number;
}

export interface IListTaskItemProps {
  list: IListTaskDto[];
  onProgressClick: (index: number) => void;
  onDoneClick: (index: number) => void;
  onTodoClick: (index: number) => void;
  removeTask: (index: number) => void;
}

export interface IStatusCardItemProps {
  taskName: string;
  taskStatus: number;
  index: number;
  onProgressClick: (index: number) => void;
  onDoneClick: (index: number) => void;
  onTodoClick: (index: number) => void;
}

export interface IinitialState {
  todoList: IListTaskDto[];
}

export type IReduxActions = {
  type: string;
  payload: any;
};
