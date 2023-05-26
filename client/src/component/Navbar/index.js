import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./index.module.css"
const Navbar = () => {
  return (
   <>
   <header>
  <div className={Style.top}>
    <div className={Style.span}>
      <span>We believe we helps people
for happier lives</span>
    </div>
    <div>
        <Link to ="#" ><img src='https://preview.colorlib.com/theme/gym/img/logo.png.webp' className={Style.imageFluid} alt=''/></Link>
    </div>
    <div className={Style.bottomlink}>
        <Link to="#">+880 123 12 658 439 </Link>
        <Link to ="#" className={Style.icontop}><i class="fa-solid fa-phone"></i></Link>
    </div>
  </div>

  <div className={Style.bottom}>
    <div className={Style.lip}>
        <nav>
            <ul>
                <li><Link className={Style.linkto} to="/">Home</Link></li>
                <li><Link className={Style.linkto} to="#">We Offer</Link></li>
                <li><Link className={Style.linkto} to="#">Top Course</Link></li>
                <li><Link className={Style.linkto} to="#">Schedule</Link></li>
                <li><Link className={Style.linkto} to="#">Trainer</Link></li>
                <li><Link className={Style.linkto} to="#">Plan</Link></li>
                <li><Link className={Style.linkto} to="/pages">Pages</Link></li>
            </ul>
        </nav>
    </div>
  </div>
   </header>
   </>
  )
}

export default Navbar