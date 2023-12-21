import React, {useState} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Pagination from "./Pagination";
import {withDesign} from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Pagination",
  component: Pagination,
  decorators: [withDesign],
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => {
  const [page, setPage] = useState(args.page);
  const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeItemsPerPage = (newItemsPerPage: number) => {
    setPage(1);
    setItemsPerPage(newItemsPerPage);
  };

  return (
    <Pagination
      totalItems={args.totalItems}
      onPageChange={handleChangePage}
      page={page}
      itemsPerPage={itemsPerPage}
      onItemsPerPageChange={handleChangeItemsPerPage}
    />
  );
};

const TemplateBox: ComponentStory<typeof Pagination> = (args) => {
  const [page, setPage] = useState(args.page);
  const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeItemsPerPage = (newItemsPerPage: number) => {
    setPage(1);
    setItemsPerPage(newItemsPerPage);
  };

  return (
    <div style={{height: "100%", width: "100%"}}>
      <div style={{bottom: "40px", position: "absolute"}}>
        <Pagination
          totalItems={args.totalItems}
          onPageChange={handleChangePage}
          page={page}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleChangeItemsPerPage}
        />
      </div>
    </div>
  );
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  page: 1,
  itemsPerPage: 10,
  totalItems: 200,
};

Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/?node-id=431%3A7899",
  },
};

export const PaginationAtBottom = TemplateBox.bind({});
PaginationAtBottom.args = {
  page: 1,
  itemsPerPage: 10,
  totalItems: 200,
};
