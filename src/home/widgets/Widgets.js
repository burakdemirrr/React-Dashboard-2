import React from 'react'
import "./widgets.scss"
const Widgets = ({title,number,percent,Icon}) => {
  return (
    <div className='widget'> 
        <div className="widget__left">
            <p>{title}</p>

            <div className="h">
                <h3>{number}</h3>
                <span>{percent}</span>
            </div>
        </div>
        <div className="widget__right">
            <Icon/>
        </div>


    </div>
  )
}

export default Widgets