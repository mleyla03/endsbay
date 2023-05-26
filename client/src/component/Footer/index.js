import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./index.module.css"
const Footer = () => {
  return (
    <>
    <div className={Style.footers}>
        <div className={Style.right}>Copyright ©2023 All rights reserved | This template is made with by <Link to ="#" className={Style.lims}> Colorlib</Link>

</div>
<div className={Style.right}>

<i class="fa-brands fa-facebook-f"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-solid fa-basketball"></i>
<i class="fa-brands fa-behance"></i>
</div>
    </div>
    </>
  )
}

export default Footer