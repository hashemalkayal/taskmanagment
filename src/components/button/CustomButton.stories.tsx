import { ComponentStory, ComponentMeta } from "@storybook/react";
import "semantic-ui-css/semantic.min.css";
import CustomButton from "./CustomButton";

export default {
  title: "CustomButton",
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (
  { loading, content, color, active },
  ...args
) => {
  return (
    <CustomButton
      loading={loading}
      content={content}
      color={color}
      active={active}
      {...args}
    />
  );
};

export const props = Template.bind({});

export const props2 = Template.bind({});

props.args = {
  loading: false,
  content: "click me",
  color: "facebook",
  active: false,
};

props2.args = {
  loading: false,
  color: "google plus",
  content: "Hashem kayal",
};
