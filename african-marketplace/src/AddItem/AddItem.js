import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import CurrencyInput from "react-currency-input-field";
import Form from "react-bootstrap/Form";
import "./AddItem.css";
import { Row, Col } from "react-bootstrap";

const initialLocations = [
  { location_id: 1, location_name: "north-west" },
  { location_id: 2, location_name: "north-central" },
  { location_id: 3, location_name: "north-east" },
  { location_id: 4, location_name: "central" },
  { location_id: 5, location_name: "south-west" },
  { location_id: 6, location_name: "south-east" },
];

const AddItem = () => {
  const [location, setLocation] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then((res) => {
  //       setLocation(res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <Container>
      <h2>ADD ITEM HERE</h2>
      <Form>
        <Row className="g-2">
          <Col md>
            <Form.Select aria-label="Default select example">
              <option>Choose Location</option>
              {initialLocations.map((element, index) => (
                <option key={index}>{element.location_name}</option>
              ))}
            </Form.Select>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Product name" />
            </Form.Group>

            <CurrencyInput
              prefix="$"
              id="input-example"
              name="input-name"
              placeholder="Please enter a price"
              defaultValue={0}
              decimalsLimit={2}
              onValueChange={(value, name) => console.log(value, name)}
            />
          </Col>
          <Col md>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" />
            </Form.Group>
          </Col>
        </Row>
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
