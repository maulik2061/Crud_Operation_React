import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
const ComB = (props) => {
  const {
    userValue,
    image,
    firstName,
    lastName,
    gender,
    id,
    hobby,
    skills,
    password,
    confirmPassword,
    setUserValue,
    userData,
    setUserData,
    edit,
    editId,
  } = props;
  const [validation, setValidation] = useState({
    Image: "",
    FirstName: "",
    LastName: "",
    Gender: "",
    Hobby: "",
    Skills: "",
    Password: "",
    ConfirmPassword: "",
  });
  useEffect(() => {
    if (firstName !== "") {
      setValidation({ ...validation, FirstName: "" });
    }
    if (lastName !== "") {
      setValidation({ ...validation, LastName: "" });
    }
    if (gender !== "") {
      setValidation({ ...validation, Gender: "" });
    }
    if (hobby !== "") {
      setValidation({ ...validation, Hobby: "" });
    }
    if (skills.length !== 0) {
      setValidation({ ...validation, Skills: "" });
    }
    if (password !== "") {
      setValidation({ ...validation, Password: "" });
    }
    if (confirmPassword !== "") {
      setValidation({ ...validation, ConfirmPassword: "" });
    }
  }, [userValue]);
  const handleOnChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setUserValue({ ...userValue, [name]: value });
  };
  const handleSubmit = () => {
    debugger;
    const error = { ...validation };
    if (firstName === "") {
      error.FirstName = "FirstName Is Required";
    } else {
      error.FirstName = "";
    }
    if (lastName === "") {
      error.LastName = "LastName Is Required";
    }
    if (gender === "") {
      error.Gender = "Gender Is Compulsury";
    }
    if (hobby === "") {
      error.Hobby = "Hobby Is Required";
    }
    if (skills.length === 0) {
      error.Skills = "At Least One Skills Is Compulsury";
    }
    if (password === "") {
      error.Password = "Password Is Required";
    }
    if (confirmPassword === "") {
      error.ConfirmPassword = "Confirm Password Is Required";
    }
    if (confirmPassword !== password) {
      error.ConfirmPassword = "Password And ConfirmPassword Is Not Same";
    }
    setValidation(error);
    if (
      firstName !== "" &&
      lastName !== "" &&
      gender !== "" &&
      hobby !== "" &&
      skills.length !== 0 &&
      password !== "" &&
      confirmPassword !== "" &&
      confirmPassword === password
    ) {
      let mydata = {
        Id: id,
        Image: image,
        FirstName: firstName,
        LastName: lastName,
        Gender: gender,
        Hobby: hobby,
        Skills: skills,
        Password: password,
        confirmPassword: confirmPassword,
      };
      // let editRecordId = localStorage.getItem("myEditid");
      // let editUserRecordId = parseInt(editRecordId);
      if (edit) {
        let userEditData = [];
        console.log(editId);
        for (let i = 0; i < userData.length; i++) {
          if (userData[i].Id === editId) {
            let updateData = {
              Id: editId,
              Image: image,
              FirstName: firstName,
              LastName: lastName,
              Gender: gender,
              Hobby: hobby,
              Skills: skills,
              Password: password,
              confirmPassword: confirmPassword,
            };
            userEditData.push(updateData);
          } else {
            userEditData.push(userData[i]);
          }
        }
        setUserData(userEditData);
      } else {
        setUserData([...userData, mydata]);
        userValue.id = userValue.id + 1;
      }
      setUserValue({
        ...userValue,
        firstName: "",
        lastName: "",
        gender: "",
        hobby: "",
        skills: [],
        password: "",
        confirmPassword: "",
        edit: false,
      });
    }
  };
  const handleCheckbox = (e) => {
    debugger;
    const { checked, value } = e.target;
    if (checked) {
      let myCheckBoxValue = {
        ...userValue,
        skills: [...userValue.skills, value],
      };
      setUserValue(myCheckBoxValue);
    } else {
      let unCheckBoxValue = {
        ...userValue,
        skills: userValue.skills.filter((item) => item !== value),
      };
      setUserValue(unCheckBoxValue);
    }
  };
  return (
    <Form>
      <h3>User Information</h3>
      <Form.Group as={Row}>
        <center>
          <Col sm="2">
            <Form.Control
              className="justify-content-md-center"
              type="image"
              src={image}
              height="250px"
              width="300px"
              name="image"
            />
          </Col>
        </center>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm="2">
          <Form.Label>First Name :</Form.Label>
        </Col>
        <Col sm="10">
          <Form.Control
            type="text"
            value={firstName}
            name="firstName"
            placeholder="Enter Your First Name"
            onChange={handleOnChange}
            onClick={(e) => {
              if (e.target.value !== "") {
                setValidation({ ...validation, FirstName: "" });
              }
            }}
          />
        </Col>
        <Col sm="1"></Col>
        <Col sm="3" className="mx-4">
          {<span style={{ color: "red" }}>{validation.FirstName}</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-3">
        <Col sm="2">
          <Form.Label>Last Name :</Form.Label>
        </Col>
        <Col sm="10">
          <Form.Control
            type="text"
            value={lastName}
            name="lastName"
            placeholder="Enter Your Last Name"
            onChange={handleOnChange}
          />
        </Col>
        <Col sm="1"></Col>
        <Col sm="3" className="mx-4">
          {<span style={{ color: "red" }}>{validation.LastName}</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-1">
        <Col sm="2">
          <Form.Label>Gender :</Form.Label>
        </Col>
        <Col sm="1">
          <Form.Check
            type="radio"
            label="Male"
            value="Male"
            checked={gender === "Male"}
            name="gender"
            id="male"
            onChange={handleOnChange}
          />
          <Form.Check
            type="radio"
            label="FeMale"
            value="FeMale"
            checked={gender === "FeMale"}
            name="gender"
            id="female"
            onChange={handleOnChange}
          />
        </Col>
        <Col sm="9"></Col>
        <Col sm="1"></Col>
        <Col sm="3" className="mx-4">
          {<span style={{ color: "red" }}>{validation.Gender}</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm="2">
          <Form.Label>Hobby :</Form.Label>
        </Col>
        <Col sm="10">
          <Form.Select value={hobby} name="hobby" onChange={handleOnChange}>
            <option value="" selected disabled>
              Select Your Hobby
            </option>
            <option value="cricket">Cricket</option>
            <option value="kabaddi">Kabaddi</option>
            <option value="chess">Chess</option>
            <option value="hockey">Hockey</option>
          </Form.Select>
        </Col>
        <Col sm="1"></Col>
        <Col sm="3" className="mx-2">
          {<span style={{ color: "red" }}>{validation.Hobby}</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-2">
        <Col sm="2">
          <Form.Label>Skills :</Form.Label>
        </Col>
        <Col sm="1">
          <Form.Check
            type="checkbox"
            label="HTML"
            id="html"
            value="HTML"
            checked={
              skills.filter((item) => item === "HTML").length === 1
                ? true
                : false
            }
            onChange={handleCheckbox}
          />
        </Col>
        <Col sm="1">
          <Form.Check
            type="checkbox"
            label="CSS"
            id="css"
            value="CSS"
            checked={
              skills.filter((item) => item === "CSS").length === 1
                ? true
                : false
            }
            onChange={handleCheckbox}
          />
        </Col>
        <Col sm="1">
          <Form.Check
            type="checkbox"
            label="JAVASCRIPT"
            id="javascript"
            value="JAVASCRIPT"
            checked={
              skills.filter((item) => item === "JAVASCRIPT").length === 1
                ? true
                : false
            }
            onChange={handleCheckbox}
          />
        </Col>
        <Col sm="1">
          <Form.Check
            type="checkbox"
            label="PHP"
            id="php"
            value="PHP"
            checked={
              skills.filter((item) => item === "PHP").length === 1
                ? true
                : false
            }
            onChange={handleCheckbox}
          />
        </Col>
        <Col sm="6"></Col>
        <Col sm="1"></Col>
        <Col sm="3" className="mx-5">
          {<span style={{ color: "red" }}>{validation.Skills}</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-2">
        <Col sm="2" className="my-2">
          <Form.Label>Password</Form.Label>
        </Col>
        <Col sm="10">
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            value={password}
            name="password"
            onChange={handleOnChange}
          />
        </Col>
        <Col sm="1"></Col>
        <Col sm="3" className="mx-4">
          {<span style={{ color: "red" }}>{validation.Password}</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-2">
        <Col sm="2" className="my-2">
          <Form.Label>Confirm Password</Form.Label>
        </Col>
        <Col sm="10">
          <Form.Control
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            placeholder="Enter Your Confirm Password"
            onChange={handleOnChange}
          />
        </Col>
        <Col sm="1"></Col>
        <Col sm="4">
          {<span style={{ color: "red" }}>{validation.ConfirmPassword}</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-2">
        <Col sm="2"></Col>
        <Col sm="2">
          <Button variant="primary" onClick={handleSubmit}>
            {edit ? "Update" : "Save"}
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ComB;
