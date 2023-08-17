import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';
import WebSocketWrapper from './WebSocketWrapper'; // Update the path as needed

// Mock WebSocket object for Storyshots
global.WebSocket = WebSocketWrapper;

initStoryshots({
  renderer: render,
});

