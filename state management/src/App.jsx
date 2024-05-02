import React, { useState } from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
function App() {

  const data = [
    {image:"https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"NVG",artist:"Akshay",added:false},
    {image:"https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Reach goal",artist:"Amith",added:false
    },
    {image:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Destiny",artist:"Justin",added:false
    },
    {image:"https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Mockingbird",artist:"Eminem",added:false
    },
    {image:"https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Birthday",artist:"50cent",added:false
    }
  ];

  const [songdata, setSongData] = useState(data)
  const handleClick =(index)=>{
   setSongData((prev)=>{
    return prev.map((item,itemindex)=>{
      if(itemindex === index)
      return{...item,added:!item.added};
      return item;
     
    })
   })

  }
  return (
    <>
    
     <Navbar data ={songdata}/>
     <div className='px-32 flex gap-10 mt-10 flex-wrap'>
    {songdata.map((obj,index)=>(
      <Cards data={obj} handleClick={handleClick} index = {index} key={index}  />
    ))}
     </div>
     
    </>
  )
}

export default App
