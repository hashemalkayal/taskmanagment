import { FC } from "react";
import { Icon } from "semantic-ui-react";
import { IListTaskDto, IListTaskItemProps } from "../../types/types";
import StatusCardItem from "../statusCardItem/StatusCardItem";
import "./listTaskItem.scss";

const ListTaskItem: FC<IListTaskItemProps> = ({
  list = [],
  onProgressClick,
  onDoneClick,
  onTodoClick,
  removeTask,
}) => {
  return (
    <div className="ListTaskItem">
      {list.map((item: IListTaskDto, index: number) => (
        <div key={index} className="coutniner-view">
          <StatusCardItem
            key={index}
            index={index}
            taskName={item.title ?? ""}
            taskStatus={item.status ?? 0}
            onDoneClick={onDoneClick}
            onTodoClick={onTodoClick}
            onProgressClick={onProgressClick}
          />

          <div className="remove-coutniner">
            <Icon color="red" onClick={() => removeTask(index)} name="trash" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTaskItem;
