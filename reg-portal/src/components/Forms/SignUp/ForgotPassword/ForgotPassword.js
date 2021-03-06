import React, { Component } from "react";
import Background from "../../../../hoc/Background/Background";
import axios from "axios";

export class SignUp extends Component {
  state = {
    firstPage: true,
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  };
  forgotPasswordClickHandler = () => {
    if (this.state.email === "") return;
    const data = JSON.stringify({
      email: this.state.email,
    });
    const config = {
      method: "post",
      url: "https://adgrecruitments.herokuapp.com/user/resetpassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ firstPage: false });
  };
  inputChangeHandler = (e, s) => {
    this.setState({ [s]: e.target.value });
  };
  formSubmitHandler = (e, a) => {
    const data = JSON.stringify({
      // email: this.state.email,
      otp: this.state.otp,
      password: this.state.newPassword,
      // confirmPassword: this.state.confirmPassword,
    });
    const config = {
      method: "PUT",
      url: "https://adgrecruitments.herokuapp.com/user/updatepassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        a.history.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <Background>
        <form>
          {this.state.firstPage ? (
            <div>
              <div className="heading">Forgot Password</div>
              <div className="input-grp">
                <label>Email</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={(event) => {
                    this.inputChangeHandler(event, "email");
                  }}
                />
              </div>
              <div
                className="sub-btn"
                onClick={(event) => {
                  event.preventDefault();
                  this.forgotPasswordClickHandler();
                }}>
                Send OTP
              </div>
            </div>
          ) : (
            <div>
              <div className="heading">Change Password</div>
              <div className="input-grp">
                <label>OTP</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter OTP"
                  value={this.state.otp}
                  onChange={(event) => {
                    this.inputChangeHandler(event, "otp");
                  }}
                />
              </div>
              <div className="input-grp">
                <label>New Password</label>
                <input
                  className="input"
                  type="password"
                  placeholder="Enter Password"
                  value={this.state.newPassword}
                  onChange={(event) => {
                    this.inputChangeHandler(event, "newPassword");
                  }}
                />
              </div>
              <div className="input-grp">
                <label>Confirm Password</label>
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={(event) => {
                    this.inputChangeHandler(event, "confirmPassword");
                  }}
                />
              </div>
              <div
                className="sub-btn"
                onClick={(event) => {
                  event.preventDefault();
                  this.formSubmitHandler(event, this.props);
                }}>
                Change Password
              </div>
            </div>
          )}
        </form>
      </Background>
    );
  }
}

export default SignUp;
