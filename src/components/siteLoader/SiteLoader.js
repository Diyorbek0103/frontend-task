import React from 'react'
import ReactLoading from 'react-loading';
import "./siteLoader.css"
const SiteLoader = () => {
  return (
    <div>
        <ReactLoading type={"spokes"} color="red"  className='siteloader'height={'100px'} width={'100px'}/>
    </div>
  )
}

export default SiteLoader