import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:3500/socket"); // Your backend URL

const Socket1 = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on("message", (data) => {
      console.log("Message received from server:", data); // Logs the received message

      if (data === "hai") {
        console.log("Received 'hai' from server");
      }

      // Update the state with the new message
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up the socket connection when the component is unmounted
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    // Emit a message to the server
    socket.emit("message", message);
    setMessage(""); // Reset the input field
  };

  return (
    <div>
      <h2>Socket.IO Chat</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>

      <div>
        <h3>Messages</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Socket1;
