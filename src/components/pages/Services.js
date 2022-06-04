import React from "react";
import styled from "styled-components";
import ServiceBox from "../elements/ServiceBox";
import box from "../images/per.png";
import ave from '../images/ave.png';
import sec from '../images/sec.png'

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px ", textAlign:"center" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Why our Services?</h1>
            <p className="font25">
            Apexia is committed to helping its clients reach their goals, to personalising their event experiences, to providing an innovative environment, and to making a difference. 
              <br />
              What makes us better than our competion are that we have
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
           
            <ServiceBoxWrapper> 
              <img src={box} width="60" height="60" className="align-top" alt="" />
              <ServiceBox
                title="Performance"
                subtitle="Apexia DCS download speeds are equal to or better than all major cloud providers. In fact, our fast speeds are default, instead of an “upgrade.”"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper style={{marginLeft:'200px'}}>
            <img src={ave} width="60" height="60" className="align-top" alt="" />

              <ServiceBox
                title="Availablity"
                subtitle="Due to our decentralized network of Storage Nodes, your data is multi-region by default, always available when you need it and can scale with your project as it grows."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper style={{marginLeft:'200px'}}>
            <img src={sec} width="60" height="60" className="align-top" alt="" />

              <ServiceBox
                title="Security"
                subtitle="Every file is split into pieces, and stored on diverse Nodes, making data breaches a thing of the past. This decentralized approach also protects your data from malicious attacks."
              />
            </ServiceBoxWrapper>

          </ServiceBoxRow>
        </div>
       
        </div>
    
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
