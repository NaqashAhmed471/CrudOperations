import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputFormData from "./components/InputFormData";
import UserDataTable from "./components/UserDataTable";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function App() {
  // State for User Object
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  // State for array for storing user data
  const [usersArray, setusersArray] = useState([]);
  console.log(usersArray);

  // For Submit Button
  const [submit, setSubmit] = useState("Submit");

  // ChangeHandler
  const changeHandler = (e, user, setUser) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Click on Datasubmit from inputFormData and push user object into usersArray
  const dataSubmit = (e, user, setUser) => {
    e.preventDefault();
    if (submit === "Submit") {
      setusersArray((usersArray) => {
        return [...usersArray, { ...user, id: uuidv4() }];
      });
    } else {
      console.log("Else runs");
      let getEditUserId = user.id;
      console.log("ID is ??????", getEditUserId );
      let findingIndex = usersArray.findIndex((value) => {
        return value.id === getEditUserId ;
      });
      console.log("Indexis ?????", findingIndex);
      console.log("User is ", user);
      usersArray[findingIndex] = user;
      setSubmit("Submit");
    }
    setUser({ name: "", email: "", password: "" });
  };

  // EditUser
  const editUser = (e, id) => {
    e.preventDefault();
    let editInUserData = usersArray.find((value) => {
      return value.id === id;
    });
    setUser(editInUserData);
    setSubmit("Edit");
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <InputFormData
            user={user}
            setUser={setUser}
            submit={submit}
            setSubmit={setSubmit}
            dataSubmit={dataSubmit}
            changeHandler={changeHandler}
          />
        </Col>
        <Col md={6}>
          <UserDataTable
            editUser={editUser}
            usersArray={usersArray}
            setusersArray={setusersArray}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
