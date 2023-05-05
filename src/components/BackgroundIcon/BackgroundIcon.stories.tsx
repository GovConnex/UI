import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BackgroundIcon from "./BackgroundIcon";
import { withDesign } from "storybook-addon-designs";
import { faSearch, faStar } from "@fortawesome/pro-solid-svg-icons";
import { faStar as faStarLight } from "@fortawesome/pro-light-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/BackgroundIcon",
  component: BackgroundIcon,
  decorators: [withDesign],
} as ComponentMeta<typeof BackgroundIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BackgroundIcon> = (args) => (
  <BackgroundIcon {...args} />
);

export const HeartSvg = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeartSvg.args = {
  icon: (
    <svg fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  ),
};
HeartSvg.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/Bipartisan-Design-System?node-id=463%3A21035",
  },
};

export const StarXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StarXs.args = {
  icon: faStar,
  size: "xs",
};

export const StarSm = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StarSm.args = {
  icon: faStar,
  size: "sm",
};

export const Star1x = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Star1x.args = {
  icon: faStar,
  size: "1x",
};

export const StarLg = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StarLg.args = {
  icon: faStar,
  size: "lg",
};

export const Star2x = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Star2x.args = {
  icon: faStar,
  size: "2x",
};

export const StarLight2x = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StarLight2x.args = {
  icon: faStarLight,
  size: "2x",
};

export const Star3x = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Star3x.args = {
  icon: faStar,
  size: "3x",
};

Star1x.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/Bipartisan-Design-System?node-id=463%3A21035",
  },
};

export const RedIcon = Template.bind({});
RedIcon.args = {
  icon: faSearch,
  size: "3x",
  cs: {
    color: "secondary.red.700",
    backgroundColor: "secondary.red.100",
  },
};
