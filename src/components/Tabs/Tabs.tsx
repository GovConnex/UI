import React, { createRef, useLayoutEffect, useRef, useState } from "react";
import {BottomHighlight, StyledTabs} from "./Tabs.styles";
import { StyledTab, StyledTypography } from "./Tab.styles";
import Icon from "../Icon";

export interface TabsProps {
  children?: React.ReactElement[];
};

const Tabs = (props: TabsProps) => {
  const TabsRef = React.useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0)
  const [selectedWidth, setSW] = useState(0)
  const [bottomBarOffset, setBBO] = useState(0)

  useLayoutEffect(() => {
    // getOffset returns the sum of <Tab> widths the left of the current selected <Tab>
    function getOffset(){
      let offset = 0 
      for (let i = 0; i <= selected -1; i++) {
        const  w = TabsRef.current?.children?.[i].getBoundingClientRect().width
        w != undefined ? offset += w : 0
      }
      return offset
    }
    
    // set the selected width
    const selectedWidth = TabsRef.current?.children?.[selected].getBoundingClientRect().width
    selectedWidth != undefined && setSW(selectedWidth)
    
    // set the bottom bar offset 
    const bottomBarOffset = getOffset()
    setBBO(bottomBarOffset)
    
    // Because the width changes afer text is loaded, we need to reset it on document state change. 
    document.onreadystatechange = () => {
      const selectedWidth = TabsRef.current?.children?.[selected].getBoundingClientRect().width
      selectedWidth != undefined &&  setSW(selectedWidth)
      const bottomBarOffset = getOffset()
      setBBO(bottomBarOffset)
    };
  }, [document, selected])


  return (
    <StyledTabs ref={TabsRef}>
      {props.children?.map((v, i) => (
        React.cloneElement(v, { onClick: () => { setSelected(i) }, selected: selected == i, key: i })
      ))}
      <BottomHighlight offset={bottomBarOffset} width={selectedWidth} />
    </StyledTabs>
  );
};




export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean,
  selected?: boolean,
  startAdornment?: React.ReactNode;
};

  
Tabs.Tab = React.forwardRef<HTMLButtonElement, TabProps>(({selected = false, ...props }, ref) => {

  return (
    <StyledTab selected={selected} ref={ref} {...props}>
      {props.startAdornment ? props.startAdornment : null}
      <StyledTypography>
        {props.children}
      </StyledTypography>
    </StyledTab>
  )
})
export default Tabs;
