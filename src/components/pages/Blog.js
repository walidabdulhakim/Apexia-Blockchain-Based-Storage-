import React from "react";
import styled from "styled-components";


export default function Blog() {
  return (
    <Wrapper id="blog">
      
      <div className="lightBg" style={{padding: '50px 0', textAlign: "center"}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">About Us</h1>
            <p className="font13" style={{fontSize:'larger'}}>
              <br/>
              Apexia was founded on 2022 by five collegues in IKU thinking of a way in changing how cloud storage works. Apexia is a blockchain based network storage 
              which eliminates Data breaches, Data outages, Rising storage costs, and gives ownership, Censorship and monitoring. 
              
              Furthermore, with the industry expected to reach 101+ billion by 2023, there is a significant need for these problems to be solved. We, like many others, believe decentralized cloud storage can do that.
              <br/>
              <br/>
              Apexia is a peer-to-peer network that stores files, with built-in economic incentives to ensure files are stored reliably over time.

              In Apexia, users pay to store their files on storage providers. 
              Storage providers are computers responsible for storing files and proving they have stored the files correctly over time.
              Anyone who wants to store their files can join Apexia. Available storage, and the price of that storage, 
              is not controlled by any single company. Instead, Apexia facilitates open markets for storing and retrieving files that anyone can participate in.
            </p>
          </HeaderInfo>
     
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;