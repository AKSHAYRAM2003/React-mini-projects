import React from "react";

function card({values,handleClick,index}) {
    const {image,name,proffession,freinds} = values;
  return (
    <div className=" w-52 bg-zinc-200 rounded-md overflow-hidden">
      <div className="w-full h-full bg-sky-500 object-cover ">
      <img src={image} alt='iamge'/>
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold font-['gilroy']">{name}</h3>
        <h5 className="font-['gilroy']">{proffession}</h5>
        <button onClick={()=>handleClick(index)} className='  px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md font-["gilroy"] mt-4  '>
         {freinds === true ? "freinds":"Add Freinds"}
        </button>
      </div>
    </div>
  );
}

export default card;
