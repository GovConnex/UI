import React, {
  useRef,
  useEffect,
  RefCallback,
  cloneElement,
  ReactElement,
  HTMLAttributes,
  MutableRefObject,
  FunctionComponent,
} from "react";

type FocusEvents = "focusin" | "focusout" | null;
type MouseEvents = "click" | "mousedown" | "mouseup";
type TouchEvents = "touchstart" | "touchend";
type Events = FocusEvent | MouseEvent | TouchEvent;

export type OnClickAway = (event: Events) => void;

export interface ClickAwayListenerProps extends HTMLAttributes<HTMLElement> {
  onClickAway: OnClickAway | null;
  focusEvent?: FocusEvents;
  mouseEvent?: MouseEvents;
  touchEvent?: TouchEvents;
  children: ReactElement<any>;
}

const eventTypeMapping = {
  click: "onClick",
  focusin: "onFocus",
  focusout: "onFocus",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  touchstart: "onTouchStart",
  touchend: "onTouchEnd",
};

const ClickAwayListener: FunctionComponent<ClickAwayListenerProps> = ({
  children,
  onClickAway,
  focusEvent = null,
  mouseEvent = "mousedown",
  touchEvent = "touchstart",
}) => {
  const node = useRef<HTMLElement | null>(null);
  const bubbledEventTarget = useRef<EventTarget | null>(null);
  const mountedRef = useRef(false);

  /**
   * Prevents the bubbled event from getting triggered immediately
   * https://github.com/facebook/react/issues/20074
   */
  useEffect(() => {
    setTimeout(() => {
      mountedRef.current = true;
    }, 0);

    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleBubbledEvents =
    (type: string) =>
    (event: Events): void => {
      bubbledEventTarget.current = event.target;

      const handler = children?.props[type];

      if (handler) {
        handler(event);
      }
    };

  const handleChildRef = (childRef: HTMLElement) => {
    node.current = childRef;

    const {ref} = children as typeof children & {
      ref: RefCallback<HTMLElement> | MutableRefObject<HTMLElement>;
    };

    if (typeof ref === "function") {
      ref(childRef);
    } else if (ref) {
      ref.current = childRef;
    }
  };

  useEffect(() => {
    if (onClickAway) {
      const handleEvents = (event: Events): void => {
        if (!mountedRef.current) return;

        if (
          (node.current && node.current.contains(event.target as Node)) ||
          bubbledEventTarget.current === event.target ||
          !document.contains(event.target as Node)
        ) {
          return;
        }

        onClickAway(event);
      };

      document.addEventListener(mouseEvent, handleEvents);
      document.addEventListener(touchEvent, handleEvents);
      if (focusEvent) document.addEventListener(focusEvent, handleEvents);

      return () => {
        document.removeEventListener(mouseEvent, handleEvents);
        document.removeEventListener(touchEvent, handleEvents);
        if (focusEvent) document.removeEventListener(focusEvent, handleEvents);
      };
    }
  }, [focusEvent, mouseEvent, onClickAway, touchEvent]);

  const mappedMouseEvent = eventTypeMapping[mouseEvent];
  const mappedTouchEvent = eventTypeMapping[touchEvent];
  const mappedFocusEvent = eventTypeMapping[focusEvent || "focusin"];

  return React.Children.only(
    cloneElement(children as ReactElement<any>, {
      ref: handleChildRef,
      [mappedFocusEvent]: handleBubbledEvents(mappedFocusEvent),
      [mappedMouseEvent]: handleBubbledEvents(mappedMouseEvent),
      [mappedTouchEvent]: handleBubbledEvents(mappedTouchEvent),
    })
  );
};

export default ClickAwayListener;
