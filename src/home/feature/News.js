import React from 'react'
import "./news.scss"
function News({Icon,title,date}) {
  return (
    <div className='news'>

        <Icon className="icn"/>
        <div className="news__right">
            <h3>{title}</h3>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default News