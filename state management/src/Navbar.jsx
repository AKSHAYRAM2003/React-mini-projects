import React from 'react'

function Navbar({data}) {
  return (
    <div className=' font-["gilroy"] w-full px-2 py-3 flex justify-between items-center'>
      <h3>Orange</h3>
      
      <div className=' font-["gilroy"] flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm  gap-2'>
      <h3 >favourites</h3>
    <h4>{data.filter(item => item.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar
