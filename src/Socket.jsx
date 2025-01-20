import { io } from "socket.io-client";


const base_url = import.meta.env.VITE_REACT_APP_DEPLOY_URL;
// const base_url = "http://localhost:3500";
let socket = null;

// Initialize or get the existing socket instance
export const initializeSocket = ({userID}) => {
  if (!socket) {
    const user = localStorage.getItem('User');
    if(user){

      socket = io(base_url, { query: { userID:user  }});
    }
    console.log("Socket initialized");
  }
  return socket;
};

// Subscribe to a specific event
export const subscribeToEvent = (event, callback) => {
  if (!socket) {
    console.error("Socket is not initialized. Call initializeSocket first.");
    return;
  }
  socket.on(event, callback);
};

// Emit an event
export const emitEvent = (event, data) => {
  if (!socket) {
    console.error("Socket is not initialized. Call initializeSocket first.");
    return;
  }
  socket.emit(event, data);
};

// Disconnect the socket
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log("Socket disconnected");
  }
};
