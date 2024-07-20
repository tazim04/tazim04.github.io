import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const PaymentInfo = ({ form, setForm }) => {
  const [cardNumber, setCardNumber] = useState(form.cardNumber);
  const [ccv, setCCV] = useState(form.ccv);
  const [expiryDate, setExpiryDate] = useState(form.expiryDate);
  const [emailAddress, setEmailAddress] = useState(form.emailAddress);

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

  const handleBackClick = (e) => {
    if (form.streetAddress) {
      // check if streetAddress exists, implies that the user should be sent back to ShippingInfo
      history.push("/shipping");
    } else {
      // otherwise, send the user back to PickUpInfo
      history.push("/pickup");
    }
  };

  return (
    <div class="mx-auto" style={{ width: "75%" }}>
      <h1 style={{ paddingBottom: "10px", paddingTop: "10px" }}>
        Enter Payment Information
      </h1>

      <form action="" id="paymentForm" noValidate>
        <div style={{ margin: "auto", width: "100%" }}>
          <label htmlFor="cardNumber" class="form-label fw-bold">
            Credit Card
          </label>
          <div class="input-group mb-3" id="name">
            <input
              type="text"
              id="cardNumber"
              class="form-control"
              placeholder="Card Number"
              aria-label="Card Number"
              aria-required="true"
              required
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type="text"
              id="ccv"
              class="form-control"
              placeholder="CCV"
              aria-label="CCV"
              aria-required="true"
              required
              value={ccv}
              onChange={(e) => setCCV(e.target.value)}
            />
          </div>

          <label htmlFor="expiryDate" class="form-label fw-bold">
            Expiration Date
          </label>
          <input
            type="date"
            id="expiryDate"
            class="form-control mb-3"
            style={{ height: "20%" }}
            aria-label="Expiration Date"
            aria-required="true"
            required
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />

          <label htmlFor="emailAddress" class="form-label fw-bold">
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            class="form-control"
            placeholder="Email Address"
            aria-label="Email Address"
            aria-required="true"
            required
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>

        <button
          class="btn checkout"
          style={{
            width: "250px",
            background: "#75DA6D",
            fontWeight: "bold",
            position: "relative",
            left: "25%",
            top: "40px",
          }}
          onClick={handleBackClick}
        >
          Back
        </button>

        <button
          class="btn checkout"
          style={{
            width: "250px",
            background: "#75DA6D",
            fontWeight: "bold",
            position: "relative",
            left: "28%",
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
