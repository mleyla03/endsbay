import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Style from "./index.module.css"
const Cours = () => {
  return (
    <>
     <div className={Style.cours}>
       <h1>We care about what we offer</h1>
       <p className={Style.onep}>Who are in extremely love with eco friendly system.</p>
    </div>
    <Box sx={{ flexGrow: 1, width:"80%", margin:"0 auto" }}>
      <Grid container  columns={12} >
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <div className={Style.images}>
            <img src="https://preview.colorlib.com/theme/gym/img/c1.jpg" style={{width:"300px", height:"200px"}}alt=""/>
            <span>Course Available</span>
          </div>
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <div className={Style.images}>
            <img src="https://preview.colorlib.com/theme/gym/img/c2.jpg" style={{width:"300px", height:"200px"}} alt=""/>
            <span>Course Available</span>
          </div>
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <div className={Style.images}>
            <img src="https://preview.colorlib.com/theme/gym/img/c3.jpg" style={{width:"300px", height:"200px"}} alt=""/>
            <span>Course Available</span>
          </div>
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <div className={Style.images}>
            <img src="https://preview.colorlib.com/theme/gym/img/c4.jpg" style={{width:"300px", height:"200px"}} alt=""/>
            <span>Course Available</span>
          </div>
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <div className={Style.images}>
            <img src="https://preview.colorlib.com/theme/gym/img/c5.jpg" style={{width:"300px", height:"200px"}} alt=""/>
            <span>Course Available</span>
          </div>
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <div className={Style.images}>
            <img src="https://preview.colorlib.com/theme/gym/img/c6.jpg" style={{width:"300px", height:"200px"}} alt=""/>
            <span>Course Available</span>
          </div>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Cours