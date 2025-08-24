import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div className='mt-1'>

  <footer className="text-center text-lg-start bg-body-tertiary" style={{}}>
    {/* <!-- Copyright --> */}
    <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2025 Copyright:
      <Link className="text-white" to={"/"} >  Jadi~Booti~Sewa</Link>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  
</div>
{/* <!-- End of .container --> */}
    </>
  )
}

export default Footer
