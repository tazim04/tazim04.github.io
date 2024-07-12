const FAQ = () => {
  const step = {
    paddingBottom: "5px",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>FAQ</h1>
      <div style={{ paddingLeft: "50px", paddingBottom: "30px" }}>
        <h3>How to place an order:</h3>
        <ol>
          <li style={step}>Browse the available products.</li>
          <li style={step}>Add desired items to your cart.</li>
          <li style={step}>Select desired order type (shipping or pick-up).</li>
          <li style={step}>Proceed to checkout.</li>
          <li style={step}>
            Provide shipping/pick-up and payment information.
          </li>
          <li style={step}>Review your order and confirm.</li>
        </ol>
      </div>

      <div style={{ paddingLeft: "50px", paddingBottom: "23px" }}>
        <h3>How to view my orders:</h3>
        <ol>
          <li style={step}>Select the profile icon in the top right.</li>
          <li style={step}>View all your previous orders!</li>
        </ol>
      </div>

      <div style={{ paddingLeft: "50px" }}>
        <h3>How to change the language:</h3>
        <ol>
          <li style={step}>
            Select the "EN" icon in the top right. It is set to English by
            default.
          </li>
          <li style={step}>
            From the dropdown menu, select the desired language.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FAQ;
