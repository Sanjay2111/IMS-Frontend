import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./animate.css";
import "./item.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [passwordAnimation, setPasswordAnimation] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        username: username,
        password: password,
      });

      if (response.data.startsWith("Login successful")) {
        setLoginStatus("Success");
        navigate("/home"); // Navigate to "/home" on successful login
      } else {
        setLoginStatus("Failure");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoginStatus("Failure");
    }
  };

  const handleForgotPassword = () => {
    window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
  };

  return (
    <>
      <div className="container">
        <div className="image">
          <div className="container d-flex justify-content-center align-items-center vh-100">
            <form
              className="animate__animated animate__fadeInLeft p-4 rounded"
              style={{
                width: "30%",
                height: "50%",
                // backgroundColor: "#87CEEB",
                border: "2px solid BLUE", // Add the border style
              }}
              onSubmit={handleSubmit}
            >
              <h2 className="animate__animated animate__bounceInDown">Login</h2>

              <div className="mb-4">
                <input
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <label className="form-label" htmlFor="form2Example1">
                  Username
                </label>
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  className={`form-control ${
                    loginStatus === "Failure" ? "is-invalid" : ""
                  } ${passwordAnimation}`}
                  value={password}
                  onChange={handlePasswordChange}
                />
                {loginStatus === "Failure" && (
                  <div className="invalid-feedback">
                    Incorrect username or password
                  </div>
                )}
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
              </div>

              <div className="row mb-4 animate__animated animate__fadeInUp">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example31"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="col">
                  <a
                    href="#!"
                    className="animate__animated animate__fadeIn"
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 animate__animated animate__fadeIn"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
