import React, { useContext, useState } from 'react'
import ServerContext from '../../Context/ServerContext.js';
import Loading from '../Loader/Loading.jsx';

function ImageRecorgnition() {

    let [AIres, setAIres] = useState("");
    let [load, setLoad]  = useState(false);
    let {handleImageAi} = useContext(ServerContext);

    let handleSumbit = async(e)=>
    {
        e.preventDefault();
        setLoad(true);
        console.log("file", e.target.image.files[0]);
        let res = await handleImageAi(e.target.image.files[0]);
        console.log("ai res", res.message);
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

    return (
        <>
        <div style={{height:"100vh", backgroundImage: `url("/heart.jpg")`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            <div className='d-flex align-items-center justify-content-center' style={{ height: "50vh" }}>

                {/* <div className='w-100'> */}
                <div className=' m-3 col-11 col-lg-4 col-md-8 col-sm-11'>
                    <label htmlFor="img" className="form-label bg-light p-2 rounded-4 text-secondary-emphasis fw-semibold">Upload Issue Image in .png/.jpg/.jpeg</label>
                    <form className="d-flex " role="search" onSubmit={handleSumbit}>

                        <input type="file" name='image' className="form-control border  border-2" id="img" />
                        <button className="btn btn-danger  ms-1" type="submit"><i className="fa-solid fa-pills fa-fade fa-xl"></i></button>
                    </form>
                    {/* </div> */}

                </div>
            </div>

            <div className='card mb-3' style={{ backgroundColor: "unset", border: 0 }}>
                <div className='container card-body border border-dark col-11 col-lg-10 col-md-10 col-sm-11 justify-content-center  bg-light rounded-3'>
                    <h3 >Reply</h3>
                    <pre className='card-text' style={{ height: "35vh", fontSize: "1.1em", fontFamily: "'Times New Roman', Times, serif", textAlign: "justify", whiteSpace: "break-spaces" }}>
                       {load === true ? <Loading /> :  AIres}
                    </pre>
                </div>
            </div>
            </div>
        </>
    )
}

export default ImageRecorgnition
