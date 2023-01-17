import React from "react";
import ComB from "./ComB";
import ComC from "./ComC";
import { useState } from "react";
function ComA() {
  const [userData, setUserData] = useState([]);
  console.log(userData, "userDatauserData");
  const [userValue, setUserValue] = useState({
    firstName: "",
    lastName: "",
    image:
      "https://thumbs.dreamstime.com/z/%D1%81ity-roofs-panoramic-view-old-tel-aviv-israel-modern-buildings-background-33300021.jpg",
    gender: "",
    hobby: "",
    skills: [],
    password: "",
    confirmPassword: "",
    id: 1,
    edit: false,
    editId: 1,
  });
  return (
    <>
      <ComB
        userValue={userValue}
        image={userValue.image}
        firstName={userValue.firstName}
        lastName={userValue.lastName}
        gender={userValue.gender}
        hobby={userValue.hobby}
        skills={userValue.skills}
        password={userValue.password}
        id={userValue.id}
        confirmPassword={userValue.confirmPassword}
        setUserValue={setUserValue}
        userData={userData}
        setUserData={setUserData}
        edit={userValue.edit}
        editId={userValue.editId}
      />
      <ComC
        userData={userData}
        setUserData={setUserData}
        userValue={userValue}
        setUserValue={setUserValue}
        image={userValue.image}
        editId={userValue.editId}
      />
    </>
  );
}

export default ComA;
