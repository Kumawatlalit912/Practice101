import {useState,useEffect} from 'react';
import axios from 'axios';
import DeleteData from '../DeleteData';
import './Data.css'
const Data = () => {

  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [getId,setGetId]=useState();
  // const [selectedId,setSelectedId]=useState();
  const [bunchOfIds,setBunchOfIds]=useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:3000/products').then((res)=>{
          return res.data;
        }).then((data)=>{
          setData(data);
          setLoading(false);
        }).catch((err)=>{
          console.log(err);})
          setBunchOfIds([]);
    },[])
    const doSomething=(e)=>{
      setGetId(e);
      // setSelectedId(e);
      if(bunchOfIds.includes(e)){
        setBunchOfIds(bunchOfIds.filter((id)=>{
          return id!==e;
        }));
      }
      else setBunchOfIds([...bunchOfIds,e]);
      console.log(bunchOfIds);
      // console.log(e);
    }

    //TODO: below one is comment
    //!Always do console.log so that you can clerify what values you are getting,as you did in div (e._id);

  return (
    <>
    <div className="main">
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20px',flexWrap:'wrap'}}>
    {
      loading?<h1>Loading ......</h1>: data.map((e)=>(
        <div key={e._id} style={{border:'2px solid black',borderRadius:'4px',margin:'5px',padding:'4px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:bunchOfIds.includes(e._id)?'lightgreen':'burlywood',color:'black',fontWeight:'900',fontSize:'15px' }} onClick={()=>doSomething(e._id)}>
          <img src={e.imageUrl} alt={e.title} style={{width:'200px' ,height:'auto',backgroundSize:'cover',backgroundRepeat:"no-repeat",outline:"none",backgroundPosition:'50% 50%',borderRadius:'4px'}}/>
          <h2>name: {e.name}</h2>
          <p style={{fontSize:"15px",overflowWrap:'break-word'}}>description: {e.description}</p>
          <h1>price: {e.price}Rs</h1>
          <p>rating: {e.rating}</p>
          <p>stock: {e.inStock}</p>
          {/* <h1>stock: {e.stock}</h1> */}
          <p style={{display:'flex',justifyContent:'flex-start',gap:'2px'}}>
          colors: {e.colors.map((ev)=><span key={ev}>{ev},</span>)}
          </p>
          <p style={{display:'flex',justifyContent:'flex-start',gap:'2px'}}>
          sizes: {e.sizes.map((ev)=><span key={ev}>{ev},</span>)}
          </p>


        </div>
      ))
    }

    </div>
    <div>
      <DeleteData id={getId} bunchOfIds={bunchOfIds} setbunchOfIds={setBunchOfIds} />
    </div>
    </div>
    </>

  )
}
export default Data;