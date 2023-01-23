import React from 'react'
import axios from 'axios';
import './DeleteData.css'
const DeleteData = ({id,bunchOfIds,setbunchOfIds}) => {
    const delProduct=async()=>{
        await bunchOfIds.map((e)=>(
             axios.delete(`http://localhost:3000/products/${e}`)
        ))
        window.location.reload(false);
        setbunchOfIds([]);
    }
  return (
    <div className="delButton">
        <button onClick={delProduct} style={{backgroundColor:"#4CAF50",border:'2px solid black',borderRadius:'4px',fonctSize:'10px',fontWeight:'700',padding:'15px',marginTop:'25px'}} className="dbutton">Select The Product And Delete It</button>
    </div>
  )
}

export default DeleteData