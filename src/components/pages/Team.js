import React from "react";
import styled from "styled-components";
import hi from "../images/profile.png"
import "../css/team.css"
import { Twitter, Facebook, LinkedIn, Instagram, YouTube } from "@material-ui/icons";


export default function Team() {
  return (
    <Wrapper id="blog">
      
      <div className="whiteBg" style={{padding: '50px 0', textAlign: "center"}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font80 extraBold">Our Team</h1>
            <p className="font25">
              We place Huge value on strong relationships and have seen the benefits they
              <br />
              bring to our company. We bring right people together to challange established thinking and drive transformation.
            </p>
          </HeaderInfo>
     
        </div>
        <div class="container">

        <div class="row">


            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={hi} alt=""/>
                    </div>
                    <div class="team-content">
                        <h2>Nasibullah Qarizada</h2>
                        <h3>Co-Founder</h3>
                        <p>Not all the questions are about to be or not be!</p>
                        <h4>1900004691@stu.iku.edu.tr</h4>
                    </div>
                    <div class="team-social">
                        <a href="twitter.com" class="social-tw"> <Twitter/></a>
                        <a href="facebook.com" class="social-fb"> <Facebook/></a>
                        <a href="linkedin.com" class="social-li"> <LinkedIn/></a>
                        <a href="instagram.com" class="social-in"> <Instagram/></a>
                        <a href="youtube.com" class="social-yt"> <YouTube/></a>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={hi} alt=""/>
                    </div>
                    <div class="team-content">
                        <h2>Walid Abdul Hakim</h2>
                        <h3>Co-Founder</h3>
                        <p>Man is born free, but is everywhere in chains.</p>
                        <h4>1900000480@stu.iku.edu.tr</h4>
                    </div>
                    <div class="team-social">
                    <a href="twitter.com" class="social-tw"> <Twitter/></a>
                        <a href="facebook.com" class="social-fb"> <Facebook/></a>
                        <a href="linkedin.com" class="social-li"> <LinkedIn/></a>
                        <a href="instagram.com" class="social-in"> <Instagram/></a>
                        <a href="youtube.com" class="social-yt"> <YouTube/></a>
                    </div>
                </div>
            </div>

           


            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={hi} alt=""/>
                    </div>
                    <div class="team-content">
                        <h2>Sulaiman Aqaiyee</h2>
                        <h3>Front-end Developer</h3>
                        <p>Happiness is not an ideal of reason but imagination</p>
                        <h4>1900004901@stu.iku.edu.tr</h4>
                    </div>
                    <div class="team-social">
                    <a href="twitter.com" class="social-tw"> <Twitter/></a>
                        <a href="facebook.com" class="social-fb"> <Facebook/></a>
                        <a href="linkedin.com" class="social-li"> <LinkedIn/></a>
                        <a href="instagram.com" class="social-in"> <Instagram/></a>
                        <a href="youtube.com" class="social-yt"> <YouTube/></a>
                    </div>
                </div>
            </div>



            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={hi} alt=""/>
                    </div>
                    <div class="team-content">
                        <h2>Abdurrahman Ekin</h2>
                        <h3>Back-end developer</h3>
                        <p>We are attacked by ideas we conquered long ago</p>
                        <h4>1800002970@stu.iku.edu.tr</h4>
                    </div>
                    <div class="team-social">
                    <a href="twitter.com" class="social-tw"> <Twitter/></a>
                        <a href="facebook.com" class="social-fb"> <Facebook/></a>
                        <a href="linkedin.com" class="social-li"> <LinkedIn/></a>
                        <a href="instagram.com" class="social-in"> <Instagram/></a>
                        <a href="youtube.com" class="social-yt"> <YouTube/></a>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={hi} alt=""/>
                    </div>
                    <div class="team-content">
                        <h2>Oussama El Kharchy</h2>
                        <h3>Front-end developer</h3>
                        <p>Be the change you want to see in the world.</p>
                        <h4>1900000577@stu.iku.edu.tr</h4>
                    </div>
                    <div class="team-social">
                    <a href="twitter.com" class="social-tw"> <Twitter/></a>
                        <a href="facebook.com" class="social-fb"> <Facebook/></a>
                        <a href="linkedin.com" class="social-li"> <LinkedIn/></a>
                        <a href="instagram.com" class="social-in"> <Instagram/></a>
                        <a href="youtube.com" class="social-yt"> <YouTube/></a>
                    </div>
                </div>
            </div>
            
            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={hi} alt=""/>
                    </div>
                    <div class="team-content">
                        <h2>Hasibullah Samadi</h2>
                        <h3>Ghost</h3>
                        <p>I was afraid of ghosts, when i growed, realized I'm one also!</p>
                        <h4>1800005761@stu.iku.edu.tr</h4>
                    </div>
                    <div class="team-social">
                    <a href="twitter.com" class="social-tw"> <Twitter/></a>
                        <a href="facebook.com" class="social-fb"> <Facebook/></a>
                        <a href="linkedin.com" class="social-li"> <LinkedIn/></a>
                        <a href="instagram.com" class="social-in"> <Instagram/></a>
                        <a href="youtube.com" class="social-yt"> <YouTube/></a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={hi} alt=""/>
                    </div>
                    <div class="team-content">
                        <h2>Mehmet Tugrul Arasan</h2>
                        <h3>Co-Ghost</h3>
                        <p>Stories have power, so long as you believe them!</p>
                        <h4>1800004088@stu.iku.edu.tr</h4>
                    </div>
                    <div class="team-social">
                    <a href="twitter.com" class="social-tw"> <Twitter/></a>
                        <a href="facebook.com" class="social-fb"> <Facebook/></a>
                        <a href="linkedin.com" class="social-li"> <LinkedIn/></a>
                        <a href="instagram.com" class="social-in"> <Instagram/></a>
                        <a href="youtube.com" class="social-yt"> <YouTube/></a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="team">
                    <div class="team-img">
                        <img src={hi} alt=""/>
                    </div>
                    <div class="team-content">
                        <h2>Busra Kocacinar</h2>
                        <h3>Product Manager</h3>
                        <p>Some text goes here that describes about team members</p>
                        <h4>B.Kocacinar@iku.edu.tr</h4>
                    </div>
                    <div class="team-social">
                    <a href="twitter.com" class="social-tw"> <Twitter/></a>
                        <a href="facebook.com" class="social-fb"> <Facebook/></a>
                        <a href="linkedin.com" class="social-li"> <LinkedIn/></a>
                        <a href="instagram.com" class="social-in"> <Instagram/></a>
                        <a href="youtube.com" class="social-yt"> <YouTube/></a>
                    </div>
                </div>
            </div>


        </div>

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