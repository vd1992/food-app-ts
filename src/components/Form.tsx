import React, { useState } from "react";

const Form = ({ changeFormValue }: any) => {
  const buttonSubmit = (e: any) => {
    e.preventDefault();
    const formNumber = document.getElementById("number-input");
    console.log(formNumber);
    //not sure why I get a warning that .value doesn't exist since it absolutely... does exist?
    changeFormValue(formNumber.value);
  };

  return (
    <div className="form" id="formId">
      <form>
        <label className="form-label" htmlFor="input">
          Search by barcode number, try 04963406 if you don't know one
        </label>

        <input
          type="text"
          id="number-input"
          placeholder="0"
          defaultValue="0"
          name="number"
        />

        <button className="button" onClick={buttonSubmit}>
          Click
        </button>
      </form>
    </div>
  );
};

export { Form };
