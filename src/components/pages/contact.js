import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import contact from '../images/contact1.jpg';
import contac2 from '../images/contact2.jpg';
import contact3 from '../images/contact3.jpg';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();


    emailjs.sendForm('service_y3179k8', 'template_d23fn0s', e.target, 'xAnWMI_P7Xt_e6oV4')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}



    return (
      <Wrapper id="contact" >
        <div className="lightBg">
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Let's get in touch</h1>
              <p className="font25">
                We're here to help and answer any question you might have.
                <br />
                We look forward to hear from you! 
              </p>
            </HeaderInfo>
            <div className="row" style={{ paddingBottom: "30px" }}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">


               <Form id="hook-form" onSubmit={sendEmail} >
               
                            <label className="font13">First name:</label>
                            <input type="text" className="form-control" name="from_name"/>
                      
                            <label className="font13">Email:</label>
                            <input type="email" className="form-control" name="email"/>
                        
                            <label className="font13">Subject:</label>
                            <input type="text" className="form-control" name="subject"/>
                        
                            <label className="font13">Your Message:</label>
                            <textarea className="font20 extraBold" id="" cols="50" rows="4" name="message"></textarea>
              </Form>      

                        <SumbitWrapper className="flex">
                          <ButtonInput form='hook-form' type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
                        </SumbitWrapper>
                  
              
               

              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                  <ContactImgBox>
                    <img src={contact} alt="office" className="radius6" />
                  </ContactImgBox>
                  <ContactImgBox>
                    <img src={contac2} alt="office" className="radius6" />
                  </ContactImgBox>
                </div>
                <div style={{ width: "50%" }}>
                  <div style={{ marginTop: "100px" }}>
                    <img src={contact3} alt="office" className="radius6" />
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
  `;
  const HeaderInfo = styled.div`
    padding: 70px 0 30px 0;
    @media (max-width: 860px) {
      text-align: center;
    }
  `;
  const Form = styled.form`
    padding: 70px 0 30px 0;
    input,
    textarea {
      width: 100%;
      background-color: transparent;
      border: 0px;
      outline: none;
      box-shadow: none;
      border-bottom: 1px solid #707070;
      height: 30px;
      margin-bottom: 30px;
    }
    textarea {
      min-height: 100px;
    }
    @media (max-width: 860px) {
      padding: 30px 0;
    }
  `;
  const ButtonInput = styled.input`
    border: 1px solid #7620ff;
    background-color: #7620ff;
    width: 100%;
    padding: 15px;
    outline: none;
    color: #fff;
    :hover {
      background-color: #580cd2;
      border: 1px solid #7620ff;
      color: #fff;
    }
    @media (max-width: 991px) {
      margin: 0 auto;
    }
  `;
  const ContactImgBox = styled.div`
    max-width: 180px; 
    align-self: flex-end; 
    margin: 10px 30px 10px 0;
  `;
  const SumbitWrapper = styled.div`
    @media (max-width: 991px) {
      width: 100%;
      margin-bottom: 50px;
    }
  `;