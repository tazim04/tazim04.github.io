let form = document.getElementById("bookingForm");

form.addEventListener("submit", (e) => { // when user submits
    e.preventDefault();

    // get patient info
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let newPatient = document.querySelector('input[name="newPatient"]:checked').value;

    // get appointmenet info
    let service = document.getElementById("services").value;
    let appointmentDate = document.getElementById("appointmentDate").value;
    let appointmentTime = document.getElementById("appointmentTime").value;
    let expert = document.getElementById("expert").value;
    let frequency = document.getElementById("frequency").value;

    let bookingNum = Math.floor((Math.random() * 1000000) + 1000000); // generate random large number

    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(dateOfBirth);
    // console.log(newPatient);
    // console.log(underEighteen);
    // console.log(service);
    // console.log(appointmentDate);
    // console.log(appointmentTime);
    // console.log(appointmentNum);

    // set params to pass to confirmation page
    let queryParameters = new URLSearchParams({
        firstName: firstName,
        lastName: lastName,
        email: email,
        dateOfBirth: dateOfBirth,
        newPatient: newPatient,
        service: service,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        expert: expert,
        frequency: frequency,
        bookingNum: bookingNum
    })

    // switch to confirmation page with form information 
    window.location.href = 'confirmation.html?' + queryParameters.toString();


})