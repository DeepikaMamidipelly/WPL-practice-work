import React, { Component } from "react";
import ReactSelect from "react-select";
import axios from "axios";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null, // to store uploaded image path
      invalidImage: null, // handle the message of the image validation
      form: {
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        courses: "",
        user: "",
        tags: [{}],
      },
      formErrors: {
        firstname: "",
        lastname: "",
        email: null,
        mobile: null,
        password: null,
        confirmPassword: null,
        user: null,
        courses: "",
      },
    };
    this.reader = new FileReader();
  }

  //handle image upload
  // handle change event of input file and validate it
  onChangeFile = (event) => {
    const imageFile = event.target.files[0];

    if (!imageFile) {
      this.setState({ invalidImage: "Please select image." });
      return false;
    }

    if (!imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
      this.setState({ invalidImage: "Please select valid image." });
      return false;
    }

    this.reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        this.setState({ selectedFile: imageFile, invalidImage: null });
      };
      img.onerror = () => {
        this.setState({ invalidImage: "Invalid image content." });
        return false;
      };
      img.src = e.target.result;
    };
    this.reader.readAsDataURL(imageFile);
  };

  //handle image response
  // handle click event of the upload button
  handleUpload = () => {
    const { selectedFile } = this.state;
    if (!selectedFile) {
      this.setState({
        handleResponse: {
          isSuccess: false,
          message: "Please select image to upload.",
        },
      });
      return false;
    }
    const formData = new FormData();
    formData.append("dataFile", selectedFile, selectedFile.name);
    axios
      .post("BASE_URL" + "uploadfile", formData)
      .then((response) => {
        this.setState({
          handleResponse: {
            isSuccess: response.status === 200,
            message: response.data.message,
          },
          imageUrl: "BASE_URL" + response.data.file.path,
        });
      })

      .catch((err) => {
        alert(err.message);
      });
  };

  //   validation

  render() {
    const { form, formErrors } = this.state;
    return (
      <>
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center mt-5">
            <div class="p-sm-5">
              <div class="row d-flex justify-content-center order-2 pd-3">
                <div class=" login col-sm-5">
                  <h3>SignUp</h3>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        First Name:<span className="asterisk">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        value={form.name}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                      />
                      {formErrors.firstname && (
                        <span className="err">{formErrors.firstname}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label>
                        Email:<span className="asterisk">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                      />
                      {formErrors.email && (
                        <span className="err">{formErrors.email}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label>
                        Password:<span className="asterisk">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                      />
                      {formErrors.password && (
                        <span className="err">{formErrors.password}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Bio:</label>
                      <textarea
                        className="form-control"
                        type="text"
                        name="textarea"
                        value={form.textarea}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                      />
                      {/* {formErrors.textarea && (
                        <span className="err">{formErrors.textarea}</span>
                      )} */}
                    </div>

                    {/* //image code */}
                    <div aria-hidden={form.user !== "tutor" ? true : false}>
                      <div className="form-group">
                        <p className="title">Select Image:</p>
                        <div style={{ marginBottom: 10 }}>
                          <input type="file" onChange={this.onChangeFile} />
                        </div>
                        {this.invalidImage && (
                          <p className="error">{this.invalidImage}</p>
                        )}
                        {/* {this.handleResponse && (
                          <p
                            className={
                              this.handleResponse.isSuccess
                                ? "success"
                                : "error"
                            }
                          >
                            {this.handleResponse.message}
                          </p>
                        )} */}
                        {/* {this.imageUrl && (
                          <img
                            src={this.imageUrl}
                            alt="Uploaded File"
                            height="100"
                            width="100"
                          />
                        )} */}
                      </div>
                    </div>

                    {/* submit */}
                    <div className="form-group ">
                      <input
                        type="button"
                        className="btn submit"
                        value="Submit"
                        onClick={this.handleSubmit}
                      />
                    </div>
                  </div>

                  {/* second column */}
                  <div className="col-md-6">
                    {/* Last Name */}
                    <div className="form-group">
                      <label>
                        Last Name:<span className="asterisk">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        value={form.name}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                      />
                      {formErrors.lastname && (
                        <span className="err">{formErrors.lastname}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label>
                        Mobile:<span className="asterisk">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="mobile"
                        value={form.mobile}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                        onKeyPress={this.validateNumber}
                      />
                      {formErrors.mobile && (
                        <span className="err">{formErrors.mobile}</span>
                      )}
                    </div>

                    {/* confirm password */}
                    <div className="form-group">
                      <label>
                        Confirm Password:<span className="asterisk">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                      />
                      {formErrors.confirmPassword && (
                        <span className="err">
                          {formErrors.confirmPassword}
                        </span>
                      )}
                    </div>

                    {/* //end of columns */}

                    <div className="form-group">
                      <label className="mr-3">
                        User:<span className="asterisk">*</span>
                      </label>
                      <div className="form-control border-0 p-0 pt-1">
                        <label className="mr-2">
                          <input
                            type="radio"
                            name="user"
                            value="student"
                            checked={form.user === "student"}
                            onChange={this.handleChange}
                          />{" "}
                          Student
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="user"
                            value="tutor"
                            checked={form.user === "tutor"}
                            onChange={this.handleChange}
                          />{" "}
                          Tutor
                        </label>
                      </div>
                      {formErrors.user && (
                        <span className="err">{formErrors.user}</span>
                      )}
                    </div>
                    <div aria-hidden={form.user !== "tutor" ? true : false}>
                      <div className="form-group">
                        <label>
                          Courses:<span className="asterisk">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="courses"
                          value={form.courses}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                        />
                        {formErrors.courses && (
                          <span className="err">{formErrors.courses}</span>
                        )}
                      </div>
                    </div>
                    {/* //end of login form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
