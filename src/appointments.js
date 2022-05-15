import React, { Component } from "react";

const Appointments = (props) => {
  return (
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center mt-5">
        <div class="p-sm-5">
          <div class="row d-flex justify-content-center order-2 pd-3">
            <div class=" login col-sm-5">
              <h1>Login</h1>
              <form>
                <div class="form-group needs-validation" novalidate>
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                  <div class="invalid-feedback">Please Enter your Name.</div>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>

                <button type="submit" class="btn submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Appointments;
