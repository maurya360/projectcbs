import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CustomerRegister extends Component {
  render() {
    const styleObj = {
      fontSize: 33,
      color: "#1c1818",
      cursor: "pointer",
    };

    return (
      <div>
        <div id="index.html" class="header_section">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-lg-3">
                <div class="logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt="img" />
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-lg-9">
                <div class="menu_text">
                  <ul>
                  <li>
                  <Link to="/home" >Home</Link>
                  </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#contact">Contact Us</a>
                    </li>

                    <div id="myNav" class="overlay">
                      <a
                        href="javascript:void(0)"
                        class="closebtn"
                        onclick="closeNav()"
                      >
                        &times;
                      </a>
                      <div class="overlay-content">
                        <a href="index.html">Home</a>
                        <a href="#about">About</a>

                        <a href="#contact">Contact Us</a>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <form
            id="register-form"
            name="register-form"
            method="post"
            role="form"
          >
            <div class="modal-dialog">
              <div class="modal-content ">
                <div class="modal-header" style={{ background: "#1c1818" }}>
                  <div>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <img
                      src="images/taxi.png"
                      class="rounded"
                      alt="img"
                      height="5"
                      width="60"
                      style={{
                        backgroundColor: "black",
                      }}
                    />
                  </div>
                  
                </div>
                <h4
                  class="modal-title  text-center"
                  style={{
                    background: "#1c1818 ",
                    fontFamily: "-moz-initial",
                    fontSize: "30px",
                    color:"white"
                  }}
                >
                  Sign Up Customer
                </h4>

                <div class="modal-body" style={{ background: "#1c1818 " }}>
                  <div class="panel">
                    <div class="panel-body">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              tabindex="1"
                              class="form-control"
                              placeholder="Full Name"
                              value=""
                            />
                          </div>

                          <div class="form-group">
                            <input
                            type="text"
                            name="Email"
                            id="Email"
                            tabindex="1"
                            class="form-control"
                            placeholder="Email "
                            value=""
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="text"
                              name="mobileno"
                              id="mobileno"
                              tabindex="3"
                              class="form-control"
                              placeholder="Mobile Number"
                              value=""
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              tabindex="4"
                              class="form-control"
                              placeholder="Address"
                              value=""
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              tabindex="6"
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="password"
                              name="cpassword"
                              id="cpassword"
                              tabindex="7"
                              class="form-control"
                              placeholder="Confirm Password"
                            />
                          </div>

                          <div class="form-group text-center">
                            <input
                              type="button"
                              name="btnregister"
                              id="btnregister"
                              tabindex="4"
                              class="form-control btn btn-register"
                              value="Register Now"
                              style={{ background: "lightblue" }}
                            />

                            <div class="text-danger" id="err2"></div>
                          </div>

                          <div
                            class="form-group text-center"
                            style={{
                              fontFamily: "cursive",
                              fontWeight: "bold",
                            }}
                          >

                          <Link to="/logincustomerpage">
                            <a href="#" class="model-link" id="login-form-link">
                              Login
                            </a>
                            </Link>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
