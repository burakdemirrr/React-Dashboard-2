import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import "./progressitem.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ProgressItem({completed,bgColor,Icon}) {
  return (
    <div className='progressitem'>
<Icon className="icn"/>
<ProgressBar 
    completed={completed}
    height="5px"
    width="450px"
    bgColor={bgColor}
    animateOnRender={true}
    initCompletedOnAnimation={0}
    transitionDuration="5s"

    borderRadius=""
    labelAlignment="outside"
    labelColor="#ffffff"
    labelSize="10px"
    />



    </div>
  )
}

export default ProgressItem