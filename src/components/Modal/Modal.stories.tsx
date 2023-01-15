import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal, StyledModalContent } from "./Modal";
import { withDesign } from 'storybook-addon-designs';
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Modal",
  component: Modal,
  decorators: [withDesign],
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal {...args} open={open} onClose={handleClose} enableClickAway>
        <StyledModalContent>
          {args.children}
        </StyledModalContent>
      </Modal>
    </div>
  );
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};


Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/?node-id=578%3A40138"
  }
};
