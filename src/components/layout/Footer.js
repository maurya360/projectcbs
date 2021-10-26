import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
            <div className="section_footer ">
            <div className="container"> 
                <div className="footer_section_2">
                  <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <h2 className="account_text">Ride with CBS Intercity</h2>
                        <p className="ipsum_text">Bringing your destination closer to you. Enjoy a comfortably affordable ride to travel incity with more benefits ..</p>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-3">
                <h2 className="account_text">Our commitment to your safety</h2>
                      <p className="ipsum_text">With every safety feature and every standard in our Community Guidelines,we're committed to helping to create a safe environment for our customers.</p>
                       
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <h2 className="account_text">Call On</h2>
                        <div className="image-icon"><img src="images/bulit-icon.png" /><span className="fb_text"><a href="#" />Mujeeba Khan:-9752336615</span></div>
                      <div className="image-icon"><img src="images/bulit-icon.png" /><span className="fb_text"><a href="#" />Usha More:-8830718391</span></div>
                      <div className="image-icon"><img src="images/bulit-icon.png" /><span className="fb_text"><a href="#" />Abhishek Maurya:-9326873937</span></div>
                      <div className="image-icon"><img src="images/bulit-icon.png" /><span className="fb_text"><a href="#" />Akshay Patil:-7066646270</span></div>
                      <div className="image-icon"><img src="images/bulit-icon.png" /><span className="fb_text"><a href="#" />Samuel Daniel:-7000399341</span></div>
                      <div className="image-icon"><img src="images/bulit-icon.png" /><span className="fb_text"><a href="#" />Anuj Agarwal:-9907267265</span></div>
                      </div>
                
                      
 
                   
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <h2 className="adderess_text">Feedback</h2>
                  <input type="text" className="email_text" placeholder="Comments" name="Comments" ></input>

                  <button className="subscribr_bt">SUBMIT</button>
                </div>
                
                </div>
                </div>
                </div>
            </div>
            </div>
      
        );
         
       
    }
}
