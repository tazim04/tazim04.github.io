import React, { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Link, useHistory } from "react-router-dom";

const PaymentInfo = ({ form, setForm }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [ccv, setCcv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const history = useHistory();

  const handleNextClick = (e) => {
    e.preventDefault();

    const formElement = document.getElementById("paymentForm");
    if (formElement.checkValidity()) {
      // validate form first
      setForm({
        ...form,
        cardNumber: cardNumber,
        ccv: ccv,
        expiryDate: expiryDate,
        emailAddress: emailAddress,
      });
      history.push("/checkout"); // redirect to checkout page
    } else {
      formElement.classList.add("was-validated"); // show validation feedback
    }
  };

  return (
    <div class="mx-auto" style={{ width: "75%" }}>
      <h1 style={{ paddingBottom: "10px", paddingTop: "10px" }}>
        Enter Payment Information
      </h1>

      <form action="" id="paymentForm">
        <div style={{ margin: "auto", width: "100%" }}>
          <label htmlFor="PatientName" className="form-label fw-bold">
            Credit Card
          </label>
          <div className="input-group mb-3" id="name">
            <input
              type="text"
              id="cardNumber"
              className="form-control"
              placeholder="Card Number"
              aria-label="Card Number"
              aria-describedby="basic-addon1"
              required
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type="text"
              id="ccv"
              className="form-control"
              placeholder="CCV"
              aria-label="CCV"
              aria-describedby="basic-addon1"
              required
              value={ccv}
              onChange={(e) => setCcv(e.target.value)}
            />
          </div>

          <label htmlFor="expiryDate" className="form-label fw-bold">
            Expiration Date
          </label>
          <input
            type="date"
            id="expiryDate"
            className="form-control mb-3"
            style={{ height: "20%" }}
            required
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />

          <label htmlFor="emailAddress" className="form-label fw-bold">
            Email Address
          </label>
          <input
            type="text"
            id="emailAddress"
            className="form-control"
            placeholder="Email Address"
            aria-label="Email Address"
            aria-describedby="basic-addon1"
            required
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>

        <button
          className="btn checkout"
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

export default PaymentInfo;
