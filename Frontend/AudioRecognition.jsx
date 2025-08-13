import React, { useState } from 'react'

function AudioRecognition() {

    let[text, setText] = useState("");

    const handleVoiceClick = ()=>
    {
       
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
        const recog = new SpeechRecognition();
        recog.onresult = (event)=>
        {
            const transcript = event.results[0][0].transcript;
            console.log("you speech is: ",transcript);
            setText(transcript);
        }
        recog.start();
    }

    // SEND THIS TEXT TO http://localhost:9999/mediReach/api/v1/voice,   WITH BODY {message: text} it WILL SEND YOU THE RESPONSE

  return (
    <>
      <div>
        <button onClick={handleVoiceClick}>Voice</button>
        <p class="text">You said:{text}</p>
      </div>
    </>
  )
}

export default AudioRecognition
