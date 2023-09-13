import React, {useLayoutEffect, useState} from "react";
import {BottomHighlight, SectionHighlight, StyledTabs} from "./Tabs.styles";
import {StyledTab, StyledTypography} from "./Tab.styles";
import Typography from "../Typography";

// Helpers

/**
 * `getIndexOfCollectionValue` returns the index of a collection with value x
 * for example the index of a child component
 */
function getIndexOfCollectionValue(
  value: string,
  collection: HTMLCollection | undefined
) {
  if (!collection) return 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].getAttribute("value") === value) {
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
    const w = collection[i]?.getBoundingClientRect()?.width || 0;

    offset += w;
  }
  return offset;
}

// UI

export interface TabsProps {
  /**
   * The content of `Tabs`.
   */
  children?: React.ReactNode;
  /**
   * Indicates whether tab is page or section
   */
  isSection?: boolean;
  /**
   * The value of the currently selected `Tab`.
   */
  value?: string;
  /**
   * Gives you access to the value prop of `Tab` on change.
   */
  onChange?: (e: string) => void;
}

/**
 *
 * `Tabs` is a shell for Tab that has a bottom bar to let the user know what current `Tab` they are on
 *
 *
 * Demo:
 *
 *  - [Stack](https://ui.govconnex.com/?path=/story/components-tabs--example)
 *
 * Docs:
 *
 *  - [Stack Docs](https://ui.govconnex.com/?path=/docs/components-tabs--example/)
 *
 */

const Tabs = (props: TabsProps) => {
  const TabsRef = React.useRef<HTMLDivElement>(null);

  // set defaults
  const [selected, setSelected] = useState<{
    value: string | undefined;
  }>({value: props.value});
  const [bottomBarParts, setBottomBarParts] = useState<{
    width: number;
    offset: number;
  }>({width: 0, offset: 0});

  // handle a new selection
  function updateSelected(value: string, index: number) {
    const collection = TabsRef.current?.children;
    if (!collection) return;

    const bottomBarWidth = collection[index]?.getBoundingClientRect()?.width || 0;
    const bottomBarOffset = getOffsetWidth(index, collection);

    setSelected({value: value});
    setBottomBarParts({width: bottomBarWidth, offset: bottomBarOffset});
  }

  // on layout set selected tab
  useLayoutEffect(() => {
    const collection = TabsRef.current?.children;
    if (!collection) return;
    if (!props.value) return;

    const index = getIndexOfCollectionValue(props.value, collection);
    let initialWidth = collection[index]?.getBoundingClientRect()?.width || 0;

    // Add 8px to the width on the first load
    if (bottomBarParts.width === 0) {
      initialWidth += 8;
      setBottomBarParts({width: initialWidth, offset: bottomBarParts.offset});
    } else {
      updateSelected(props.value, index);
    }
  }, []);

  return (
    <StyledTabs ref={TabsRef} isSection={props.isSection}>
      {React.Children.map(props.children, (child, i) => {
        if (React.isValidElement(child)) {
          return (() => {
            return React.cloneElement(child, {
              onClick: () => {
                updateSelected(child.props.value, i);
                props.onChange && props.onChange(child.props.value);
                child.props.onClick && child.props.onClick();
              },
              selected: selected.value === child.props?.value,
              key: `tab-${i}`,
              isSection: props.isSection,
            } as React.HTMLProps<HTMLButtonElement>); // Explicitly define the type here
          })();
        }
        return child;
      })}
      {props.isSection ? (
        <SectionHighlight
          data-testid="section-highlight"
          offset={bottomBarParts.offset}
          width={bottomBarParts.width}
        />
      ) : (
        <BottomHighlight offset={bottomBarParts.offset} width={bottomBarParts.width} />
      )}
    </StyledTabs>
  );
};

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Value of the current tab
   */
  value: string;
  /**
   * Label rendered on tab
   */
  label: string;
  /**
   * Indicates whether tab is page or section
   */
  isSection?: boolean;
  /**
   * Accepts a react node to render on the left side/start of the tab
   */
  startAdornment?: React.ReactElement;
  /**
   * Accepts a react node to render on the right side/end of the tab
   */
  endAdornment?: React.ReactElement;
}

/**
 *
 * `Tabs.Tab` is a tab cell
 * @param {value} value of the current tab
 * @param {string} label rendered on tab
 * @param {boolean} isSection is page or section
 * @param {React.ReactNode} startAdornment a react node to render on the left side/start of the tab
 * @param {React.ReactNode} endAdornment a react node to render on the right side/end of the tab
 *
 */
Tabs.Tab = React.forwardRef<HTMLButtonElement, TabProps>(({...props}, ref) => {
  return (
    <StyledTab selected={false} ref={ref} {...props}>
      {props.startAdornment ? props.startAdornment : null}
      <StyledTypography>
        <Typography variant="label" size="md">
          {props.label}
        </Typography>
      </StyledTypography>
      {props.endAdornment ? props.endAdornment : null}
    </StyledTab>
  );
});
export default Tabs;
