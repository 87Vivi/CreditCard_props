import styled from "styled-components";
import React from "react";

const Card = styled.div`
  padding: 1rem;
  width: 35vw;
  height: 45vh;
  border-radius: 2rem;
  background-color: #2754a1;
  margin: 20vh auto;
`;

const BankName = styled.h1`
  font-family: "Times New Roman";
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: 0.3rem;
  color: white;
  margin-left: 13.3rem;
`;

const CardNumber = styled.h2`
  color: white;
  font-family: "Roboto Mono", monospace;
  font-size: 3rem;
  font-weight: 400;
  padding: 1.4rem;
  text-align: center;
`;

const SecNumber = styled(CardNumber)`
  color: white;
  text-align: left;
  font-size: 1.5rem;
  margin-left: 3rem;
  margin-top: -4rem;
`;

const ExpirationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 6rem;
  margin-top: -5rem;
`;
const Expiration = styled(CardNumber)`
  width: 3.6rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-top: 2rem;
  font-size: 1rem;
`;

const ExpirationDate = styled(CardNumber)`
  font-size: 2.2rem;
  font-weight: 400;
`;

const CardHolderName = styled.h3`
  font-size: 2.5rem;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  margin-left: 3.5rem;
`;

export default function CardInfo(props) {
  return (
    <div>
      <Card>
        <BankName>{props.bankName}</BankName>
        <CardNumber>{props.cardNumber}</CardNumber>
        <SecNumber>{props.secNumber}</SecNumber>
        <ExpirationBox>
          <Expiration>{props.expiration}</Expiration>
          <ExpirationDate>{props.expirationDate}</ExpirationDate>
        </ExpirationBox>
        <CardHolderName>{props.clientName}</CardHolderName>
      </Card>
    </div>
  );
}
