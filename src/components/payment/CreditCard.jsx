import React from "react";
import { useState } from "react";
import Card from "react-credit-cards";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";


export const CreditCard = () => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setCardData({
        ...cardData,
        issuer,
      });
    }
  };

  const handleInputFocus = ({ target }) => {
    setCardData({
      ...cardData,
      focused: target.name,
    });
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }
    setCardData({
      ...cardData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = cardData;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});
    setCardData({
      ...cardData,
      formData,
    });
    // reset form data after submit
    // setCardData({
    //     ...cardData,
    //     number: "",
    //     name: "",
    //     expiry: "",
    //     cvc: "",
    //     issuer: "",
    //     focused: "",
    //     formData: null,
    //     });
  };


  const { name, number, expiry, cvc, focused, issuer, formData } = cardData;

  return (
    <>
      <Card
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focused}
        callback={handleCallback}
      />
      <form
       onSubmit={handleSubmit}>
        <div>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            required
            value={number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <small>E.g.: 49..., 51..., 36..., 37...</small>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="row">
          <div>
            <input
              type="tel"
              name="expiry"

              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
                value={expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div>
            <input
              type="tel"
              name="cvc"

              placeholder="CVC"
              pattern="\d{3,4}"
              required
                value={cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
        <input type="hidden" name="issuer" value={issuer} />
        <div >
          <button>PAY</button>
        </div>
      </form>
      {formData && (
        <div>
          {formatFormData(formData).map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
      )}
    </>
  );
};
