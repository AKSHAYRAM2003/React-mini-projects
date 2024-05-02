import React from 'react'

function Cards({data,handleClick,index }) {
  const {image,artist,added,name} = data
  return (
    <div className='w-60 bg-zinc-200 p-4 rounded-md flex gap-4 pb-6 relative '>
    <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
    <img className='w-full h-full object-cover' src={image}  alt='img'/>
    </div>
    <div>
    <h3 className='font-["gilroy"] text-xl leading-none font-semibold '>{name}</h3>
    <h6 className='font-["gilroy"] text-sm'>{artist}</h6>
    </div>
    <button onClick={()=>handleClick(index)} className={`font-["gilroy"] px-4 py-3  absolute bottom-0  text-white text-sm rounded-full left-1/2 translate-y-[50%]  -translate-x-[50%] whitespace-nowrap ${added === false ? "bg-orange-600": "bg-teal-700"}`}>Add to favourites</button>
    </div>
  )
}

export default Cards
