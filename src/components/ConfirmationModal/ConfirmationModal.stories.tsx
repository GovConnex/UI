import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConfirmationModal from "./ConfirmationModal";
import { withDesign } from "storybook-addon-designs";
import mdx from "./ConfirmationModal.mdx";

export default {
  title: "Components/ConfirmationModal",
  component: ConfirmationModal,
  decorators: [withDesign],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof ConfirmationModal>;

const Template: ComponentStory<typeof ConfirmationModal> = (args) => (
  <ConfirmationModal {...args} />
);

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
      variant: "danger",
      text: "Delete",
      onClick: () => {},
    },
  ],
};

Example.parameters = {
  // design: {
  //   type: "figma",
  //   url: ""
  // }
};
