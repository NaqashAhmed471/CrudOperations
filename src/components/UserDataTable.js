import React from "react";
import Table from "react-bootstrap/Table";
import userTable from "./userTable.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function UserDataTable({ editUser, usersArray, setusersArray }) {
  // DeleteUser
  const deleteUser = (e, id) => {
    e.preventDefault();
    setusersArray((usersArray) => {
      return usersArray.filter((value) => {
        return value.id !== id;
      });
    });
  };

  return (
    <div className={userTable.table_Wrapper}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersArray.map(({ name, email, password, id }, index) => {
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>
                  <EditIcon
                    type="submit"
                    className={userTable.editBtn}
                    onClick={(e) => editUser(e, id)}
                  />
                </td>
                <td>
                  <DeleteIcon
                    type="submit"
                    className={userTable.deleteBtn}
                    onClick={(e) => deleteUser(e, id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default UserDataTable;
