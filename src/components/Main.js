import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./Main.css";
import Data from "../Flights.json"
const Main = () => {
    const [arg1,setArg1]=useState("");
    const [arg2,setArg2]=useState("");
    const [arg3,setArg3]=useState("");
    const [arg4,setArg4]=useState("");
    const [filteredData,setFilteredData]=useState(Data);
    const [maxPrice,setMinPrice]=useState("")
    const priceOptions = [...new Set(Data.map(item => item.price))];
    const ddateOptions = [...new Set(Data.map(item => item.ddate))];
    const rdateOptions = [...new Set(Data.map(item => item.rdate))];

    function clickHandle(e){
     e.preventDefault();
     if(arg1.trim()==="" || arg2.trim()==="" || arg3==="" || arg4==="" || maxPrice==="")
     {
      toast.error("Enter all fields before searching.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
       
     }
     else
     {setFilteredData(Data.filter(x=>{
      
      return ((x.origin.toLowerCase()===arg1.trim().toLowerCase()) && arg2.trim().toLowerCase()===x.destination.toLowerCase() && arg3===x.ddate && x.rdate===arg4 && maxPrice>=x.price )
    })
      )
  }
      
    }
    
    
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    console.log(arg4);
    
  return (
    <>
    <div className="mainDiv">
         <div  className="leftDiv ">
           <h4 style={{marginTop:"10%"}} className="container" >Search Flights!</h4>
     <div className="formDiv">
    
     <form>
      <div className="inputfield container" >
      <label style={{fontSize:"100"}} className=" col-sm-12 col-lg-3" >Origin City :</label>
         <input className="form-control inputfield" type="text" onChange={e=>{setArg1(e.target.value)}} />
      </div>
         <div className="inputfield container" >
         <label style={{fontSize:"100%"}} className="col-sm-12 col-lg-3">Destination City :</label>
         <input style={{fontSize:"100%"}} className="form-control inputfield" type="text"  onChange={e=>{setArg2(e.target.value)}} />
         </div>


         <hr className="style6 container"/>


         <div  className="half inputfield container">
         <label style={{fontSize:"1rem"}} >Select Departure Date</label>
         <select  onChange={e=>{setArg3(e.target.value)}} className="form-control inputfield" placeholder="Departure Date">
         <option hidden></option>
           {ddateOptions.map((val)=>{
           return <option >{val}</option>
         })}
           </select>
         </div> 
         <div  className="half inputfield container col-md-12">
           <label style={{fontSize:"1rem"}}>Select Return Date</label>
           <select  onChange={e=>{setArg4(e.target.value)}} className="form-control inputfield" >
         <option hidden></option>
           {rdateOptions.map((val)=>{
           return <option >{val}</option>
         })}
           </select>
           
           </div>

           <hr className="style6 container"/>
           <div className="half container">
           <label style={{fontSize:"1rem"}}>Max Price</label>
           <select  onChange={e=>{setMinPrice(e.target.value)}} className="form-control inputfield" >
         <option hidden></option>
           {priceOptions.map((val)=>{
           return <option >{val}</option>
         })}
           </select>
           </div>
           <hr className="style6 container"/>
         <button type="button" className="btn btn-info inputfield" onClick={clickHandle}>Search</button>
     </form>
     </div>
      </div>

      <div  className="rightDiv">
        <h4>Find Your Flight Here !</h4>

      { 
      
      filteredData.map((val,key)=>{
        return (
          <Card origin={val.origin} destination={val.destination} ddate={val.ddate} rdate={val.rdate} price={val.price} dtime={val.dtime} atime={val.atime} />
        )
      })
      
      }
      </div>
    </div>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </>
  );

};
export default Main;
