import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Datepicker from "./Datepicker";
import Button from "../Button";
import {withDesign} from "storybook-addon-designs";
import ComponentSummary from "./ComponentSummary.mdx";
import ReactDOMServer from "react-dom/server";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Datepicker",
  component: Datepicker,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: ReactDOMServer.renderToString(<ComponentSummary />),
      },
    },
  },
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => {
  const [shown, setShown] = React.useState(false);
  const buttonRef = React.useRef(null);

  // override on close
  const overriddenArgs = {
    ...args,
    onClose: () => {
      setShown(false);
    },
  };

  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => {
          setShown(true);
        }}
      >
        Show Datepicker
      </Button>
      {shown && <Datepicker anchorEl={buttonRef} {...overriddenArgs} />}
    </>
  );
};

export const Basic = Template.bind({});

export const WithDefaultDate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithDefaultDate.args = {
  defaultDate: new Date("2022-01-02"),
  defaultTime: "10:35",
  hasTime: true,
  onChange: (value) => {
    console.log("date: ", value);
  },
  onTimeChange: (value) => {
    console.log("time: ", value);
  },
};
