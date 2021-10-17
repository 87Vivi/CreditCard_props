import React from "react";

import CardInfo from "./components/CreditCard.jsx";

function App() {
  return (
    <div>
      <CardInfo
        bankName="Big Bank, Inc."
        cardNumber="1234 578 8765 4321"
        secNumber="1234"
        expiration="valid thru"
        expirationDate="08/19"
        clientName="Cardholder Name"
      ></CardInfo>
    </div>
  );
}

export default App;
