import React from "react";
import { usePopper } from "react-popper";

export interface DropdownControllerProps {
  /**
   *
   * @param visible boolean to determine if the overlay is visible
   * renders the children of the DropdownController
   */
  rootButton: (visible: any) => React.ReactNode;

  /**
   * @param close function to close the overlay
   */
  overlay: (close: () => void) => React.ReactNode;

  /**
   * z-index of the overlay
   */
  zIndex?: number;
}

/**
 *
 * `DropdownController` Describe what it does
 *
 * Component Demo: [DropdownController](https://ui.govconnex.com/?path=/story/components-DropdownController--example)
 *
 */
const DropdownController = (props: DropdownControllerProps) => {
  const { rootButton, overlay, zIndex } = props;
  const [visible, setVisibility] = React.useState(false);

  const referenceRef =
    React.useRef() as React.MutableRefObject<HTMLDivElement | null>;
  const popperRef =
    React.useRef() as React.MutableRefObject<HTMLDivElement | null>;

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      modifiers: [{ name: "eventListeners", enabled: visible }],
      placement: "bottom-start",
    }
  );

  React.useEffect(() => {
    const handleDocumentClick = (event: any) => {
      if (
        referenceRef.current?.contains(event.target) ||
        popperRef.current?.contains(event.target)
      ) {
        return;
      }
      setVisibility(false);
    };
    // listen for clicks and close dropdown on body
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  const selectorWidth = referenceRef.current?.getBoundingClientRect().width;

  const body = (
    <div
      ref={popperRef}
      {...attributes.popper}
      style={{ width: selectorWidth ||  "100%", zIndex: zIndex || 5, ...styles.popper }}
    >
      {visible ? overlay(() => setVisibility(false)) : null}
    </div>
  );

  return (
    <>
      {rootButton({
        toggleVisibility: () => setVisibility(!visible),
        visible: visible,
        ref: referenceRef,
      })}
      {body}
    </>
  );
};

export default DropdownController;
