import React, { useContext, useState } from 'react'
import "./Front.css"
import ServerContext from '../Context/ServerContext.js';
import Loading from './Loader/Loading.jsx';

function Front() {

  let [text, setText] = useState("");
  let [AIres, setAIres] = useState("");
  let [load, setLoad] = useState(false);
  let {handleTextAi} = useContext(ServerContext);

  let handleSubmit = async(e)=>
  {
    setAIres("");
    setLoad(true);
    e.preventDefault();
    let res = await handleTextAi(text);
    if(res.status == 200)
    {
      setAIres(res.message);
    }
    else
    {
      alert(res.message);
    }
    setText("");
    setLoad(false);
  }

 
  return (
    <>
      <div className='img'>
        <div className='container d-flex h-50  justify-content-center promptContainer' style={{opacity: "1"}}>
          <form className="d-flex align-self-center col-10 col-lg-8 col-md-9 col-sm-10" role="search" onSubmit={handleSubmit}>
          <textarea className="form-control me-2 bs-body-color text-center" value={text} onChange={(e)=> setText(e.target.value)} type="search" placeholder="Your Medical Issue!" aria-label="Search"/>
          <button className="btn btn-warning" type="submit"><i className="fa-solid fa-stethoscope fa-fade fa-lg"></i></button>
          </form>
        </div>

        <div className='card ' style={{backgroundColor: "unset", border: 0}}>
        <div className='container card-body  col-11 col-lg-10 col-md-10 col-sm-11 justify-content-center  bg-light rounded-3'>
          <h3 >Reply</h3>
          <pre className='card-text' style={{height: "35vh", fontSize: "1.1em", fontFamily: "'Times New Roman', Times, serif", textAlign: "justify", whiteSpace: "break-spaces"}}>
            <>{load === true ? <Loading /> :  AIres}</>
         
          </pre>
        </div>
        </div>
      </div>
    </>
  )
}

export default Front
