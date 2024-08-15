import React from 'react'
import { Link } from "react-router-dom";
import './Menuitem.css'

function MenuItem(props) {
  return (
    <div>
        <Link className='menu' to={props.linkurl}>{props.linktext}</Link>
    </div>
  )
}

export default MenuItem