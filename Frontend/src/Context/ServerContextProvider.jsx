import React from 'react';
import ServerContext from "./ServerContext.js";
import axios from 'axios';

function ServerContextProvider({ children }) {

  const server = axios.create({
    baseURL: `${import.meta.env.VITE_API_BACKEND_URL || "http://localhost:9999/mediReach/"}api/v1/`,
    withCredentials: true,
  });

  let handleTextAi = async (txtMessage) => {
    try {
      console.log("context", txtMessage);
      let serRes = await server.post("/text", {
        message: txtMessage
      });
      console.log("server res: ", serRes.data.message.content);
      return { status: 200, message: serRes.data.message.content };
    } catch (error) {
      return { status: 500, message: error }
    }
  }

  let handleVoiceAi = async (voiceMessage) => {
    try {
      console.log("voice msg", voiceMessage);
      let serRes = await server.post("/voice", {
        message: voiceMessage,
      });

      console.log("server res: ", serRes.data.message.content);
      return { status: 200, message: serRes.data.message.content };

    } catch (error) {
      return { status: 500, message: error }
    }
  }

  let handleImageAi = async (image) => {
    try {
      let newFile = new FormData();
      newFile.append("image", image)
      console.log("image file", image);
      let serRes = await server.post("/image", newFile);
      console.log("image res ", serRes.data.message[0].text);
      return { status: 200, message: serRes.data.message[0].text };
    } catch (error) {
      return { status: 500, message: error };
    }
  }

  return (
    <ServerContext.Provider value={{ handleTextAi, handleVoiceAi, handleImageAi }}>
      {children}
    </ServerContext.Provider>
  )
}

export default ServerContextProvider
