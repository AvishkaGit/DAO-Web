import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import './Links.css'

function Links() {
  return (
    <div className='links'>
        <MenuItem linktext='HOME' linkurl='/'/>
        <MenuItem linktext='DAOs' linkurl='/daos'/>
    </div>
  )
}

export default Links