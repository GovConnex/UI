import React, {useState, useLayoutEffect} from "react";
import {createPortal} from "react-dom";

const createContainerAndAppendToBody = (containerId: string) => {
  const containerElement = document.createElement("div");
  containerElement.setAttribute("id", containerId);
  document.body.appendChild(containerElement);
  return containerElement;
};

const Portal = ({
  children,
  container = "portal-container",
  disablePortal,
}: {
  children: React.ReactNode;
  container?: string | HTMLElement | null;
  disablePortal?: boolean;
}) => {
  const [containerElement, setContainerElement] = useState<null | HTMLElement>(null);

  useLayoutEffect(() => {
    if (!container) return;
    let element: null | HTMLElement,
      systemCreated = false;

    if (typeof container === "string") {
      element = document.getElementById(container);

      // if element is not found with container or container is not provided,
      // create and append to body
      if (!element) {
        systemCreated = true;
        element = createContainerAndAppendToBody(container);
      }
    } else {
      element = container;
    }

    setContainerElement(element);

    return () => {
      // delete the programatically created element
      if (element && systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [container]);

  if (disablePortal && React.isValidElement(children)) return children;
  // containerElement state will be null on the very first render.
  if (containerElement === null) return null;

  return createPortal(children, containerElement);
};

export default Portal;
