import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConfirmationModal from "./ConfirmationModal";
import { withDesign } from "storybook-addon-designs";
import mdx from "./ConfirmationModal.mdx";
import { BackgroundIcon } from "..";

export default {
  title: "Components/ConfirmationModal",
  component: ConfirmationModal,
  decorators: [withDesign],
} as ComponentMeta<typeof ConfirmationModal>;

const Template: ComponentStory<typeof ConfirmationModal> = (args) => {
  // Wrap modal in button and shown state to allow for toggling in storybook
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Open Modal</button>
      <ConfirmationModal
        {...args}
        buttons={
          args.buttons &&
          args.buttons.map((button) => ({
            ...button,
            onClick: () => {
              setShow(false);
              button.onClick();
            },
          }))
        }
        isOpen={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
  onClose: () => {},
  title: "Delete Item",
  text: "Are you sure you want to delete this item? This action cannot be undone.",
  backgroundIcon: "fas fa-trash-alt",
  buttons: [
    {
      variant: "secondary",
      text: "Cancel",
      onClick: () => {},
    },
    {
      variant: "secondaryDanger",
      text: "Delete",
      onClick: () => {},
    },
  ],
};

export const CustomBackgroundIcon = Template.bind({});
CustomBackgroundIcon.args = {
  isOpen: true,
  onClose: () => {},
  title: "Delete Item",
  text: "Are you sure you want to delete this item? This action cannot be undone.",
  backgroundIcon: (
    <BackgroundIcon
      icon={["fas", "trash-alt"]}
      size="2x"
      cs={{
        color: "white",
        backgroundColor: "secondary.red.700",
      }}
    />
  ),
  buttons: [
    {
      variant: "secondary",
      text: "Cancel",
      onClick: () => {},
    },
    {
      variant: "secondaryDanger",
      text: "Delete",
      onClick: () => {},
    },
  ],
};
