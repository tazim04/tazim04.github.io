import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const ShippingInfo = ({ form, setForm }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const history = useHistory();

  const handleNextClick = () => {
    console.log("Next clicked!");
    setForm({
      ...form,
      firstName: firstName,
      lastName: lastName,
      streetAddress: streetAddress,
      province: province,
      city: city,
      postalCode: postalCode,
    });
    history.push("/payment");
  };
  return (
    <div>
      <h1 style={{ paddingBottom: "100px", paddingTop: "30px" }}>
        Enter Shipping Information
      </h1>

      <form action="" id="shippingForm">
        <div style={{ margin: "auto", width: "100%" }}>
          <label htmlFor="PatientName" class="form-label fw-bold">
            Name
          </label>
          <div class="input-group mb-3" id="name">
            <input
              type="text"
              id="firstName"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              aria-describedby="basic-addon1"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              id="lastName"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
              aria-describedby="basic-addon1"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <label
            htmlFor="streetAddress"
            class="form-label fw-bold"
            style={{ paddingTop: "20px" }}
          >
            Address
          </label>

          <input
            type="text"
            id="streetAddress"
            class="form-control mb-3"
            placeholder="Street Address"
            aria-label="Street Address"
            aria-describedby="basic-addon1"
            required
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />

          <select
            class="form-select mb-3"
            id="province"
            aria-label="province"
            required
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          >
            <option selected disabled value="">
              Provinces
            </option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="YT">Yukon</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            id="city"
            class="form-control"
            placeholder="City"
            aria-label="City"
            aria-describedby="basic-addon1"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            id="postalCode"
            class="form-control"
            placeholder="Postal Code"
            aria-label="Postal Code"
            aria-describedby="basic-addon1"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>

        <button
          class="btn"
          type="submit"
          style={{
            width: "250px",
            background: "#75DA6D",
            fontWeight: "bold",
            position: "relative",
            left: "41%",
            top: "40px",
          }}
          onClick={handleNextClick}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default ShippingInfo;
