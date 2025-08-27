import React, { useContext, useState } from 'react'
import ServerContext from '../../Context/ServerContext.js';
import Loading from '../Loader/Loading.jsx';

function AudioRecognition() {

  let [text, setText] = useState("You Said: ");
  let [AIres, setAIres] = useState("");
  let [voiceOn, setVoiceOn] = useState(false);
  let [load, setLoad] = useState(false);
  let {handleVoiceAi} = useContext(ServerContext);

  const handleVoiceClick = () => {
    console.log("start")
    setText("");
    // setVoiceOn(true);
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();
    recog.onresult = (event) => {
      console.log("start2")
      const transcript = event.results[0][0].transcript;
      console.log("you speech is: ", transcript);
      setText(transcript);
      // setVoiceOn(false);
    }
    recog.start();
  }

  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    console.log("audio");
    setLoad(true);
    let res = await handleVoiceAi(text)
    if(res.status == 200)
    {
      setAIres(res.message);
    }
    else
    {
      alert(res.message);
    }
    setLoad(false);
  }

  // SEND THIS TEXT TO http://localhost:9999/mediReach/api/v1/voice,   WITH BODY {message: text} it WILL SEND YOU THE RESPONSE

  return (
    <>
    <div style={{height: "100vh", backgroundImage: `url("/healthcare.jpg")`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
      <div className=' m-0 d-flex align-items-center' style={{ height: "50vh" }}>

        <div className='w-100'>
          <div className='d-flex justify-content-center '>
            <button className='btn fs-1 m-3 mt-3 text-danger' onClick={handleVoiceClick}><i className="fa-solid fa-microphone fa-2xl"></i></button>
          </div>
          {/* {voiceOn === true? "mic is open please speak": "mic is off"} */}
          <div className='d-flex justify-content-center m-0'>
            <div className='col-8 col-lg-4 col-md-6 col-sm-8'>
              <textarea className="form-control text border border-success border-2" onChange={(e) => setText(e.target.value)} value={text} placeholder='You Said: '></textarea>
            </div>
          </div>

          <div className='d-flex justify-content-center m-2'>
            <button className='btn btn-success' onClick={handleSubmit}><i className="fa-solid fa-paper-plane fa-xl"></i> Send</button>
          </div>
        </div>

      </div>

      <div className='card mb-3' style={{backgroundColor: "unset", border: 0}}>
        <div className='container card-body border border-dark  col-11 col-lg-10 col-md-10 col-sm-11 justify-content-center  bg-light rounded-3'>
          <h3 >Reply</h3>
          <pre className='card-text ' style={{height: "35vh", fontSize: "1.1em", fontFamily: "'Times New Roman', Times, serif", textAlign: "justify", whiteSpace: "break-spaces"}}>
          {load === true ? <Loading /> : AIres}
          </pre>
        </div>
        </div>
        </div>
    </>
  )
}

export default AudioRecognition
