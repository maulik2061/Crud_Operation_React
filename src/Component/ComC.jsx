import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function ComC(props) {
  const { userData, setUserData, userValue, setUserValue,  } = props;
  const handleDelete = (id) => {
    debugger;
    let deleteRecord = userData.filter((item) => item.Id !== id);
    setUserData(deleteRecord);
  };
  const handleEdit = (editRecordId) => {
    debugger;
    let updateRecord = userData.filter((item) => item.Id === editRecordId);
    let myEditData = updateRecord[0];
    setUserValue({
      ...userValue,
      firstName: myEditData.FirstName,
      lastName: myEditData.LastName,
      gender: myEditData.Gender,
      hobby: myEditData.Hobby,
      skills: myEditData.Skills,
      password: myEditData.Password,
      confirmPassword: myEditData.confirmPassword,
      edit: true,
      editId: editRecordId,
    });
  };
  return (
    <Table striped bordered hover variant="dark">
      {userData.length > 0 ? (
        <thead>
          <tr>
            <td>Id</td>
            <td>Image</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Gender</td>
            <td>Hobby</td>
            <td>Skills</td>
            <td>Password</td>
            <td>Confirm Password</td>
            <td>Action</td>
          </tr>
        </thead>
      ) : (
        ""
      )}
      <>
        <tbody>
          {userData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Id}</td>
                <td>
                  <img src={item.Image} alt="" height="50px" width="50px" />
                </td>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.Gender}</td>
                <td>{item.Hobby}</td>
                <td>{item.Skills?.join(",")}</td>
                <td>{item.Password}</td>
                <td>{item.confirmPassword}</td>

                <td>
                  <Button onClick={() => handleEdit(item.Id)} className="mx-2">
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.Id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </>
    </Table>
  );
}

export default ComC;
