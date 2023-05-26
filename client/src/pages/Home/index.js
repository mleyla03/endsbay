import { Footer } from 'antd/es/layout/layout'
import React from 'react'
import About from '../About'
import Cours from '../Cours'
import Plan from '../Plan'
import {Helmet} from "react-helmet";
import Style from "./index.module.css"
const Home = () => {
  return (
    <>
    
    <Helmet>
               
                <title>Home</title>
             
            </Helmet>
    <section className={Style.home}>
        <div className={Style.homes}>
           <div>
            <div className={Style.texts}>
                <h1>REAL FITNESS DEPENDS ON EXERCISE</h1>
                <p>SHAPE YOUR BODY WELL.</p>
            </div>
           </div>
        </div>
    </section>
    <About/>
    <Cours/>
    <Plan/>
    <Footer/>
    </>
  )
}

export default Home