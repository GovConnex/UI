import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IssueCard from "./IssueCard";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/IssueCard",
  component: IssueCard,
  decorators: [withDesign],
} as ComponentMeta<typeof IssueCard>;

const Template: ComponentStory<typeof IssueCard> = (args) => (
  <IssueCard {...args} />
);

const LinkTemplate: ComponentStory<typeof IssueCard> = (args) => (
  <a href="">
    <IssueCard {...args} />
  </a>
);

export const WrappedInLink = LinkTemplate.bind({});
WrappedInLink.args = {
  issue: {
    id: "123123123",
    title: "My test issue",
    description: "This is an issue card.",
    shared: false,
    userLinks: [],
    notificationsEnabled: true,
  },
};

export const NoUsers = Template.bind({});
NoUsers.args = {
  issue: {
    id: "123123123",
    title: "My test issue",
    description: "This is an issue card.",
    shared: false,
    userLinks: [],
    notificationsEnabled: true,
  },
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  issue: {
    id: "123123123",
    title: "My test issue",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas arcu diam, imperdiet auctor ultrices eu, vulputate vitae nisl. Vestibulum at congue sapien. Sed faucibus mauris ante, in commodo purus lobortis et. Nunc volutpat turpis lacus, in pharetra massa ultricies vitae. Integer rhoncus libero eget vestibulum rhoncus. Quisque vehicula risus a gravida consectetur. Sed congue molestie mauris, vitae rutrum erat accumsan sit amet. Aliquam efficitur efficitur enim et aliquam. Proin sed auctor lectus. Integer et enim sit amet tortor hendrerit blandit et at est.

Quisque commodo leo placerat urna faucibus, eget rhoncus dolor consequat. Cras tortor tortor, pellentesque eget blandit non, ultrices in orci. Donec efficitur, sem a congue pharetra, enim purus venenatis purus, non porta risus arcu at ex. Etiam ullamcorper consequat tincidunt. Etiam semper vel mauris nec congue. Donec nec suscipit orci. Phasellus eget lectus erat. Vivamus turpis erat, malesuada vitae turpis ac, blandit auctor diam.

Maecenas porta aliquet posuere. Phasellus ullamcorper at sem non congue. Proin mattis eu risus at feugiat. Donec non felis diam. Nunc a tincidunt purus. Donec tempor id mauris a gravida. Aenean luctus convallis maximus. Donec tincidunt euismod enim, a egestas lacus scelerisque et. Nullam eu nunc arcu. Curabitur viverra odio ac fringilla pulvinar.

`,
    shared: false,
    userLinks: [],
    notificationsEnabled: true,
  },
};

export const NonMemberHasUsersLocked = Template.bind({});
NonMemberHasUsersLocked.args = {
  accessLevel: "non_member",
  issue: {
    id: "123123123",
    title: "My test issue",
    description: "This is an issue card.",
    shared: false,
    userLinks: [
      {
        userId: "123123",
        user: {
          fullName: "Bob Bob",
          profileImage: {
            url: "",
          },
        },
      },
    ],
    notificationsEnabled: true,
  },
};

export const AdminHasUsersLockedSilenced = Template.bind({});
AdminHasUsersLockedSilenced.args = {
  accessLevel: "admin",
  issue: {
    id: "123123123",
    title: "My test issue",
    description: "This is an issue card.",
    shared: false,
    userLinks: [
      {
        userId: "123123",
        user: {
          fullName: "Bob Bob",
          profileImage: {
            url: "",
          },
        },
      },
    ],
    notificationsEnabled: false,
  },
};

export const LotsOfMembers = Template.bind({});
LotsOfMembers.args = {
  accessLevel: "admin",
  issue: {
    id: "123123123",
    title: "My test issue",
    description: "This is an issue card.",
    shared: false,
    userLinks: [
      {
        userId: "123123",
        user: {
          fullName: "Jenny Jenny",
          profileImage: {
            url: "",
          },
        },
      },
      {
        userId: "536735",
        user: {
          fullName: "Bob Bob",
          profileImage: {
            url: "",
          },
        },
      },
      {
        userId: "184865",
        user: {
          fullName: "Lara Lara",
          profileImage: {
            url: "",
          },
        },
      },
      {
        userId: "567389",
        user: {
          fullName: "Fred Fred",
          profileImage: {
            url: "",
          },
        },
      },
      {
        userId: "45682",
        user: {
          fullName: "Clara Clara",
          profileImage: {
            url: "",
          },
        },
      },
      {
        userId: "278272",
        user: {
          fullName: "Mary Mary",
          profileImage: {
            url: "",
          },
        },
      },
      {
        userId: "456456456",
        user: {
          fullName: "Jane Jane",
          profileImage: {
            url: "",
          },
        },
      },
    ],
    notificationsEnabled: false,
  },
};
