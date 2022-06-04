import React, { Component } from 'react';
import {  MDBContainer, MDBFooter } from "mdbreact";
import { Link } from "react-scroll";


class Footer extends Component {
    render() {
        return <footer> 
        <MDBFooter className="darkBg" style= {{backgroundColor:"Black"}}>
      <MDBContainer fluid className="flexCenter animate pointer">

      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{color : "white"}}>
           2022 Copyright  All rights reserved by Apexia.com
        </MDBContainer>
        <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
        Back to top
        </Link>
      </div>
    </MDBFooter>
        </footer>
    }
}

export default Footer;


