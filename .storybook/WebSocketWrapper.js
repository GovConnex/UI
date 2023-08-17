class WebSocketWrapper {
    constructor(url) {
      this.url = url;
      this.listeners = {};
      this.readyState = WebSocket.CONNECTING;
    }
  
    addEventListener(event, callback) {
      this.listeners[event] = callback;
    }
  
    // Simulate WebSocket behavior and events
    simulateOpen() {
      this.readyState = WebSocket.OPEN;
      this.listeners.open && this.listeners.open();
    }
  
    simulateMessage(message) {
      this.listeners.message && this.listeners.message({ data: message });
    }
  
    simulateClose() {
      this.readyState = WebSocket.CLOSED;
      this.listeners.close && this.listeners.close();
    }
  }
  
  export default WebSocketWrapper;
  