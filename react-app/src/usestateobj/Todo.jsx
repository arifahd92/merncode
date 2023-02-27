import React, { useState } from 'react'

export default function Todo() {
    let [data,setdata]=useState([])
    let [inpt, setinpt]=useState()
    function add(){
        setdata([...data,inpt])//yaha pe data arraay hai but jab data ki destructure kiya to wah array nhi rah gaya
                                //so use array banane k liye array me dalna pada,as we know setdata sirf array lega
        // console.log(data)
        data.map((elm)=>console.log(elm))
    }
    function deleteitem(ind){
      let newres = data.filter((elm,i)=>{
        return i!=ind
      })
      setdata(newres)
      
    }
  return (
    <div>
      <input type="text" placeholder='enter item' onChange={(e)=>setinpt(e.target.value)}/>
      <button onClick={add} >add</button>
      {/* yaad rakhe return keyword jaroori hai jsx k case me aur (<> saare jsx tag yahin par likha jayega  </>) */}
      {/* wo alag baat hai aero fxn me {} n lagayen to inbuilt return rahta hai */}
      {
        data.map((elm,ind)=>{
          return(
            <>
            <h1 key={ind}>{elm} </h1><button onClick={()=>deleteitem(ind)} >delete</button>
            </>
          )
        })
      }
    </div>
  )
}
