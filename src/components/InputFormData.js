import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import inputForm from "./inputForm.module.css";

function InputFormData({ user, setUser, submit , setSubmit , changeHandler, dataSubmit }) {
  
  return (
    <div className={inputForm.form_Wrapper}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={user.name}
            onChange={(e) => changeHandler(e, user, setUser)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={(e) => changeHandler(e, user, setUser)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={(e) => changeHandler(e, user, setUser)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => dataSubmit(e, user, setUser)}
        >
          {submit}
        </Button>
      </Form>
    </div>
  );
}

export default InputFormData;
