import React from 'react'
import "./progress.scss"
import ProgressItem from './ProgressItem'
import { DiCodeigniter, DiCss3,DiHtml5,DiReact,DiPython} from "react-icons/di";

function Progress() {
  return (
    <div className='progress'>
        <h1>Progress Track</h1> 
        <hr/>
        <div className="progres__list">
            <ProgressItem completed={10} bgColor="#db1c1c" Icon={DiCodeigniter} color="red"/>
            <ProgressItem completed={100} bgColor="#40558d" Icon={DiCss3}/>
            <ProgressItem completed={100} bgColor="#400c61" Icon={DiHtml5}/>
            <ProgressItem completed={80} bgColor="#0d39ca" Icon={DiReact}/>
            <ProgressItem completed={50} bgColor="#e5c512" Icon={DiPython}/>
        </div>

    </div>
  )
}

export default Progress