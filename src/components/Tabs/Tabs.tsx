import React, { useLayoutEffect, useState } from "react";
import { BottomHighlight, StyledTabs } from "./Tabs.styles";
import { StyledTab, StyledTypography } from "./Tab.styles";
import { uniqueId } from "lodash";

// Helpers

/**
 * `getIndexOfCollectionValue` returns the index of a collection with value x
 * for example the index of a child component
 */
function getIndexOfCollectionValue( value: string, collection: HTMLCollection | undefined) {
  if (!collection) return 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].getAttribute("value") == value) {
      return i;
    }
  }
  return 0;
}

/**
 * `getOffsetWidth` returns the sum of collection widths to the left of a given index
 */
function getOffsetWidth(selectedIndex: number, collection: HTMLCollection) {
  let offset = 0;
  for (let i = 0; i <= selectedIndex - 1; i++) {
    const w = collection[i].getBoundingClientRect().width;
    w != undefined ? (offset += w) : 0;
  }
  return offset;
}

// UI

export interface TabsProps {
  /**
   * Any react element
   */
  children?: React.ReactNode;
  /**
   * The value of the currently selected `Tab`.
   */
  value?: string;
}

/**
 *
 * `Tabs` is a shell for Tab that has a bottom bar to let the user
 *  know what current `Tab` they are on
 * @param {React.ReactNode} children takes any react element
 * @param {string} value the value of the currently selected tab
 * @see https://ui.govconnex.com/?path=/story/components-tabs--example
 *
 */

const Tabs = (props: TabsProps) => {
  const TabsRef = React.useRef<HTMLDivElement>(null);

  // set defaults
  const [selected, setSelected] = useState<{
    value: string | undefined;
    index: number;
  }>({ value: props.value, index: 0 });
  const [bottomBarParts, setBottomBarParts] = useState<{
    width: number;
    offset: number;
  }>({ width: 0, offset: 0 });

  // handle a new selection
  function updateSelected(value: string, index: number) {
    const collection = TabsRef.current?.children;
    if (!collection) return;

    const bottomBarWidth = collection[index].getBoundingClientRect().width;
    const bottomBarOffset = getOffsetWidth(index, collection);

    setSelected({ value: value, index: index });
    setBottomBarParts({ width: bottomBarWidth, offset: bottomBarOffset });
  }

  // on layout set selected tab
  useLayoutEffect(() => {
    const collection = TabsRef.current?.children;
    if (!collection) return;
    if (!props.value) return;
    updateSelected( props.value, getIndexOfCollectionValue(props.value, collection));
  }, []);

  return (
    <StyledTabs ref={TabsRef}>
      {props.children instanceof Array
        ? props.children?.map((v, i) =>
            React.cloneElement(v, {
              onClick: () => { updateSelected(v.props.value, i); },
              selected: selected.value === v.props.value,
              key: uniqueId(),
            })
          )
        : props.children}

      <BottomHighlight
        offset={bottomBarParts.offset}
        width={bottomBarParts.width}
      />
    </StyledTabs>
  );
};

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Value of the current tab
   */
  value: string;
  /**
   * Label rendered on tab
   */
  label: string;
  /**
   * Accepts a react node to render on the left side/start of the tab
   */
  startAdornment?: React.ReactElement;
}

/**
 *
 * `Tabs.Tab` is a tab cell
 * @param {value} value of the current tab
 * @param {string} label rendered on tab
 * @param {React.ReactNode} startAdornment a react node to render on the left side/start of the tab
 *
 */
Tabs.Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ ...props }, ref) => {
    return (
      <StyledTab selected={false} ref={ref} {...props}>
        {props.startAdornment ? props.startAdornment : null}
        <StyledTypography>{props.label}</StyledTypography>
      </StyledTab>
    );
  }
);
export default Tabs;
