import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Input } from "semantic-ui-react";
import ListTaskItem from "../../components/listTaskItem/ListTaskItem";
import {
  clearTask,
  setAddTask,
  updateList,
  updateTask,
} from "../../redux/actions/appActions";
import { IROOTSTATE } from "../../redux/Stores";
import { Status } from "../../types/enums";
import { IListTaskDto } from "../../types/types";
import "./task.scss";

const Task: FC = () => {
  const [taskName, setTaskName] = useState<string>("");

  const TodoList = useSelector((state: IROOTSTATE) => state.App.todoList);
  const dispatch = useDispatch();

  const onAddTaskClick = (): void => {
    if (!!taskName) {
      const checkIfExsist = TodoList.find((item: IListTaskDto) =>
        item.title?.includes(taskName)
      );

      if (checkIfExsist) {
        toast.warn("task already exsist");
        return;
      }

      dispatch(setAddTask(taskName, Status.Todo));
      playSound("addSound");
      toast.success("You have new task");
      setTaskName("");
      return;
    }

    toast.warn("Please Add New Task Name", {
      theme: "dark",
    });
  };

  const onClearAllTask = () => {
    if (!!TodoList && TodoList?.length > 0) dispatch(clearTask());
  };

  const onTodoClick = (index: number): void => {
    dispatch(updateTask(Status.Todo, index));
  };

  const onProgressClick = (index: number): void => {
    const checkStatus: number | undefined = TodoList.find(
      (_: any, crrentIndex: number) => crrentIndex === index
    ).status;

    if (checkStatus !== Status.InProgress) {
      dispatch(updateTask(Status.InProgress, index));
      return;
    }

    toast.warn("task already In-Progress", {
      theme: "colored",
    });
  };

  const onDoneClick = (index: number): void => {
    const checkStatus: number | undefined = TodoList.find(
      (_: any, crrentIndex: number) => crrentIndex === index
    ).status;

    if (!!checkStatus && checkStatus !== Status.Completed) {
      dispatch(updateTask(Status.Completed, index));
      playSound("completedSound");
      toast.success("task completed");
      return;
    }

    toast.warn("task already completed");
  };

  const removeTask = (index: number): void => {
    const temp: Array<IListTaskDto> = [...TodoList].filter(
      (item: IListTaskDto, currentIndex: number) => currentIndex !== index
    );

    dispatch(updateList(temp));
  };

  const playSound = (sound: string) => {
    let audio = new Audio(require(`../../assets/sound/${sound}.wav`));
    audio.play();
  };

  return (
    <div className="Task">
      <section className="form-countiner">
        <h5 className="name-user">Hello Hashem!</h5>
        <h2>You have {TodoList.length} tasks today</h2>

        <section className="row-view">
          <Input
            value={taskName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTaskName(e.target.value)
            }
            placeholder="What you have today ?"
            className="input-style"
          />
          <Button
            primary
            className="btn-style"
            content="Add Task"
            onClick={onAddTaskClick}
          />
          <Button
            primary
            className="btn-style"
            content="Clear All Task"
            onClick={onClearAllTask}
          />
        </section>
      </section>

      <main className="list-coutniner">
        <ListTaskItem
          onDoneClick={onDoneClick}
          onTodoClick={onTodoClick}
          onProgressClick={onProgressClick}
          removeTask={removeTask}
          list={TodoList}
        />
      </main>
    </div>
  );
};

export default Task;
