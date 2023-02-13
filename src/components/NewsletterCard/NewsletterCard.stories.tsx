import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NewsletterCard from './NewsletterCard';
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/NewsletterCard',
  component: NewsletterCard,
  decorators: [withDesign],
} as ComponentMeta<typeof NewsletterCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NewsletterCard> = (args) => <NewsletterCard {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  title: 'Test',
  icon: 'money-bills-simple',
  iconType: 'far',
  bgIcon: 'money-bills-simple',
  bgIconType: 'far',
  color: '#37498B',
  bgColor: '#303F79',
};

Example.parameters = {
  //  design: {
  //    type: "figma",
  //    url: ""
  //  }
};
