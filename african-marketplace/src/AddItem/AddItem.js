import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import CurrencyInput from "react-currency-input-field";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./AddItem.css";
import { Row, Col } from "react-bootstrap";
import FormSchema from "../validation/FormSchema";
import * as yup from "yup";

const initialLocations = [
  { location_id: 1, location_name: "north-west" },
  { location_id: 2, location_name: "north-central" },
  { location_id: 3, location_name: "north-east" },
  { location_id: 4, location_name: "central" },
  { location_id: 5, location_name: "south-west" },
  { location_id: 6, location_name: "south-east" },
];
const initialFormState = {
  name: "",
  description: "",
  location_id: null,
  price: null,
  category: "",
};
const initialFormError = {
  name: "",
  description: "",
  location_id: "",
  price: "",
  category: "",
};

const FormError = ({ message }) => {
  return message === "" || message == null ? null : (
    <div
      style={{
        padding: "10px",
        color: "red",
      }}
    >
      {message}
    </div>
  );
};

const AddItem = () => {
  const [location, setLocation] = useState(initialLocations);
  const [formState, setFormState] = useState(initialFormState);
  const [formError, setFormError] = useState(initialFormError);

  const validate = (name, value) => {
    console.log("name", name, value);
    return yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => {
        // console.log("is valid");
        setFormError({ ...formError, [name]: "" });
        return true;
      })
      .catch((err) => {
        console.log(err);
        setFormError({ ...formError, [name]: err.errors[0] });
        return false;
      });
  };

  const changeHandler = (ev) => {
    console.log(`change handler!`, ev.target.value);
    const name = ev.target.name;
    let value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    if (name === "location_id") {
      value = value === "Choose Location" ? undefined : parseInt(value, 10);
    }
    if (name === "price") {
      value =
        typeof value === "string" && value.startsWith("$")
          ? value.replace("$", "")
          : value;
      if (value === "") {
        value = undefined;
      }
    }
    setFormState({ ...formState, [ev.target.name]: value });
    validate(ev.target.name, value).then((valid) => {
      console.log(`valid? ${valid}`);
    });
  };
  const hasFormError = async (formError) => {
    for (const name in formError) {
      const hasError = await validate(name, formState[name]);
      if (hasError) {
        return true;
      }
    }
    return false;
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    // if (await hasFormError(formError)) {
    //   return;
    // }
    axios
      .post("https://marketplace-2.herokuapp.com/listings/create", formState, {
        headers: { authorization: window.localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        setFormState(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container
      style={{
        padding: "12%",
      }}
    >
      <Form
        onSubmit={submitHandler}
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          opacity: "1",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ paddingTop: "8px" }}>
          ✨&nbsp;&nbsp;&nbsp;ADD ITEM HERE&nbsp;&nbsp;&nbsp;✨
        </h2>
        <Row className="g-2">
          <Col md>
            <Form.Group controlId="location">
              <Form.Select
                style={{ width: "20%", padding: "7px" }}
                aria-label="Default select example"
                onChange={changeHandler}
                name="location_id"
              >
                <option>Choose Location</option>
                {location.map((element, index) => (
                  <option value={element.location_id} key={index}>
                    {element.location_name}
                  </option>
                ))}
              </Form.Select>
              <FormError message={formError.location_id} />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label></Form.Label>
              <Form.Control
                className="error"
                // style={{
                //   backgroundColor: "rgb(96, 0, 0)",
                //   border: "3px solid red",
                // }}
                type="text"
                name="name"
                placeholder="Enter Product name"
                onChange={changeHandler}
              />
              <FormError message={formError.name} />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="Enter Category"
                onChange={changeHandler}
              />
              <FormError message={formError.category} />
            </Form.Group>

            <CurrencyInput
              prefix="$"
              id="input-example"
              name="price"
              placeholder="Please enter a price"
              defaultValue={0}
              decimalsLimit={2}
              onChange={changeHandler}
            />
            <FormError message={formError.price} />
          </Col>
          <Col md>
            <Form.Group controlId="formDescription">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter description"
                onChange={changeHandler}
              />
              <FormError message={formError.description} />
            </Form.Group>
          </Col>
        </Row>
        <Button
          style={{
            width: "170px",
            cursor: "pointer",
            marginTop: 10,
            fontSize: "18px",
            backgroundColor: "#69db7c",
            color: "white",
          }}
          type="submit"
        >
          Add Item
        </Button>{" "}
      </Form>
    </Container>
  );
};
export default AddItem;
//{
/* <div>
      <form>
        <label>
          Choose location
          <select>
            {initialLocations.map((element, index) => (
              <option key={index}>{element.location_name}</option>
            ))}
          </select>
        </label>
        <label>
          name
          <input
            name="product"
            type="text"
            placeholder="Product Name"
            onChange={""}
          />
        </label>
        <label>
          <form>
            <input
              name="description"
              type="text"
              placeholder="Add a Description"
              onChange={""}
            />
          </form>
        </label>
      </form>
    </div>
 */
//}
