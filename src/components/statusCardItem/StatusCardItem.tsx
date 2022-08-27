import { FC } from "react";
import "./statusCardItem.scss";
import { IStatusCardItemProps } from "../../types/types";
import { Button, Icon } from "semantic-ui-react";
import { Status } from "../../types/enums";

const StatusCardItem: FC<IStatusCardItemProps> = ({
  taskName,
  taskStatus,
  index,
  onProgressClick,
  onTodoClick,
  onDoneClick,
}) => {
  const selectStyleBasedOnStatus = (status: number): string => {
    return status === Status.Completed
      ? "#72E776"
      : status === Status.InProgress
      ? "#06AED5"
      : status === Status.Todo
      ? "#fff1d0"
      : "red";
  };

  return (
    <div className="StatusCardItem">
      <section
        className="card-item"
        style={{
          borderLeft: `15px solid ${selectStyleBasedOnStatus(taskStatus)}`,
        }}
      >
        <div className="row-view">
          <label>{taskName}</label>

          <div className="list-action-button">
            <Button
              onClick={() => onTodoClick(index)}
              className="todo-btn"
              content={"TO-DO"}
            />

            <Button
              onClick={() => onProgressClick(index)}
              className="inProgress-btn"
              content={"In Progress"}
            />

            <Button
              onClick={() => onDoneClick(index)}
              className="done-btn"
              content={"Done"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusCardItem;
