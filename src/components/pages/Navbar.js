import React, { Component } from 'react';
import box from '../images/box.png'
import { Link } from "react-scroll";
import styled from "styled-components";
class Navbar extends Component {

  render() {
    return (
      <div className='ccsticky-nav'>
      <nav className="navbar navbar-dark p-0 flexCenter animate whiteBg " style={{backgroundColor:"black" ,width : '100%', position: "sticky"}}>
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://www.iku.edu.tr/"
          target="_blank"
          rel="noopener noreferrer"
>
          <img src={box} width="70" className="align-top" alt="" /> </a>

        <UlWrapper className="flexNullCenter" style={{color: "white", marginRight: "250px", marginLeft: '200px'}}>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                HOME
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                WHY US?
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="main" spy={true} smooth={true} offset={-80}>
                UPLOAD
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                ABOUT
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="team" spy={true} smooth={true} offset={-80}>
                TEAM
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                CONTACT
              </Link>
            </li>
          </UlWrapper>
        



        <ul className="navbar-nav px-3">
          <li>
            <small id="account">
              <a target="_blank"
                 alt=""
                 className=" navbar-brand col-sm-3 col-md-2 mr-0"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}
                 >
                 Profile </a>
            
            </small>
           
          </li>
          
        </ul>
  




  
      </nav>
      </div>
      
    );
  }
}

export default Navbar;




const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;