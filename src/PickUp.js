import React, { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Link, useHistory } from "react-router-dom";

const PickUp = ({ form, setForm }) => {
  const [firstName, setFirstName] = useState(form.firstName);
  const [lastName, setLastName] = useState(form.lastName);
  const [location, setLocation] = useState(form.location);
  const [pickUpDate, setPickUpDate] = useState(form.pickUpDate);
  const [pickUpTime, setPickUpTime] = useState(form.pickUpTime);

  const history = useHistory();

  const handleNextClick = (e) => {
    e.preventDefault();

    const formElement = document.getElementById("pickUpForm");
    if (formElement.checkValidity()) {
      setForm({
        ...form,
        firstName: firstName,
        lastName: lastName,
        location: location,
        pickUpDate: pickUpDate,
        pickUpTime: pickUpTime,
      });
      history.push("/payment");
    } else {
      formElement.classList.add("was-validated");
    }
  };

  return (
    <div class="mx-auto" style={{ width: "75%" }}>
      <h1 style={{ paddingBottom: "10px", paddingTop: "10px" }}>
        Enter Pick-Up Information
      </h1>

      <form class="needs-validation" action="" id="pickUpForm" noValidate>
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
            Location
          </label>

          <select
            class="form-select mb-3"
            id="province"
            aria-label="province"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option selected disabled value="">
              Locations
            </option>
            <option value="123 Maplewood Ave">123 Maplewood Ave</option>
            <option value="456 Lakeside Dr">456 Lakeside Dr</option>
            <option value="789 Downtown St">789 Downtown St</option>
            <option value="101 Sunnyvale Blvd">101 Sunnyvale Blvd</option>
          </select>
        </div>

        <label for="date" class="form-label fw-bold">
          Date and Time of Pick-Up
        </label>
        <div class="input-group mb-3" id="dateAndTime">
          <input
            type="date"
            id="pickUpDate"
            class="form-control"
            style={{ height: "20%" }}
            required
            value={pickUpDate}
            onChange={(e) => setPickUpDate(e.target.value)}
          />
          <select
            class="form-select mb-3"
            id="pickUpTime"
            aria-label="time"
            required
            value={pickUpTime}
            onChange={(e) => setPickUpTime(e.target.value)}
          >
            <option selected disabled value="">
              Available Times
            </option>
            <option value="8:15am">8:15 AM</option>
            <option value="8:30am">8:30 AM</option>
            <option value="8:45am">8:45 AM</option>
            <option value="9:00am">9:00 AM</option>
            <option value="9:15am">9:15 AM</option>
            <option value="9:30am">9:30 AM</option>
            <option value="9:45am">9:45 AM</option>
            <option value="10:00am">10:00 AM</option>
            <option value="10:15am">10:15 AM</option>
            <option value="10:30am">10:30 AM</option>
            <option value="10:45am">10:45 AM</option>
            <option value="11:00am">11:00 AM</option>
            <option value="11:15am">11:15 AM</option>
            <option value="11:30am">11:30 AM</option>
            <option value="11:45am">11:45 AM</option>
            <option value="12:00pm">12:00 PM</option>
            <option value="12:15pm">12:15 PM</option>
            <option value="12:30pm">12:30 PM</option>
            <option value="12:45pm">12:45 PM</option>
            <option value="1:00pm">1:00 PM</option>
            <option value="1:15pm">1:15 PM</option>
            <option value="1:30pm">1:30 PM</option>
            <option value="1:45pm">1:45 PM</option>
            <option value="2:00pm">2:00 PM</option>
            <option value="2:15pm">2:15 PM</option>
            <option value="2:30pm">2:30 PM</option>
            <option value="2:45pm">2:45 PM</option>
            <option value="3:00pm">3:00 PM</option>
            <option value="3:15pm">3:15 PM</option>
            <option value="3:30pm">3:30 PM</option>
            <option value="3:45pm">3:45 PM</option>
            <option value="4:00pm">4:00 PM</option>
            <option value="4:15pm">4:15 PM</option>
            <option value="4:30pm">4:30 PM</option>
            <option value="4:45pm">4:45 PM</option>
            <option value="5:00pm">5:00 PM</option>
            <option value="5:15pm">5:15 PM</option>
            <option value="5:30pm">5:30 PM</option>
            <option value="5:45pm">5:45 PM</option>
            <option value="6:00pm">6:00 PM</option>
            <option value="6:15pm">6:15 PM</option>
            <option value="6:30pm">6:30 PM</option>
            <option value="6:45pm">6:45 PM</option>
            <option value="7:00pm">7:00 PM</option>
            <option value="7:15pm">7:15 PM</option>
            <option value="7:30pm">7:30 PM</option>
            <option value="7:45pm">7:45 PM</option>
            <option value="8:00pm">8:00 PM</option>
            <option value="8:15pm">8:15 PM</option>
            <option value="8:30pm">8:30 PM</option>
            <option value="8:45pm">8:45 PM</option>
            <option value="9:00pm">9:00 PM</option>
            <option value="9:15pm">9:15 PM</option>
            <option value="9:30pm">9:30 PM</option>
          </select>
        </div>

        <button
          class="btn checkout"
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

export default PickUp;
