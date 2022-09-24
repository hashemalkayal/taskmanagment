import { FC } from "react";
import { Button, ButtonProps } from "semantic-ui-react";

interface ICustomButton extends ButtonProps {}

const CustomButton: FC<ICustomButton> = ({ ...rest }) => {
  return <Button {...rest} />;
};

export default CustomButton;
