import React from 'react'
import "./featured.scss"
import News from './News'
import { FaBeer,FaBell } from 'react-icons/fa'  ;
import { AiFillCalendar,AiFillFacebook,AiFillMail,AiFillSignal } from "react-icons/ai";
function Featured() {
  return (
    <div className='featured'>
      <h3>Orders overview</h3>
      <p>+30% this month</p>

      <div className="news__list">
        <News Icon={FaBell} title="$2400, Design changes" date="22 DEC 7:20 PM"/>
        <News Icon={AiFillCalendar} title="New order #1832412" date="21 DEC 11 PM"/>
        <News Icon={AiFillFacebook} title="Server payments for April" date="21 DEC 9:34 PM"/>
        <News Icon={AiFillMail} title="New card added for order #4395133" date="20 DEC 2:20 AM"/>
        <News Icon={AiFillSignal} title="New card added for order #4395133" date="18 DEC 4:54 AM"/>

      </div>

    </div>
  )
}

export default Featured