"use client";
import { useState } from "react";
import { FormInput } from "../_components/form-input";

const inputHasSpecialChac = (string) => {
  return /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(string);
};

const stepOneLocal = (values) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("stepOne", JSON.stringify(values));
  }
};

export const StepOne = (props) => {
  const { handlenextStep } = props;

  const getItemFronLocalStepOne = () => {
    if (typeof window !== "undefined") {
      const values = localStorage.getItem("stepOne");
      if (values) {
        return JSON.parse(values);
      }
    }
    return {
      firstName: "",
      lastName: "",
      userName: "",
    };
  };

  const [nameValues, setNameValues] = useState(getItemFronLocalStepOne);

  const [errorState, setErrorState] = useState(false);

  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setNameValues({ ...nameValues, [inputName]: inputValue });
  };

  const checkInput = () => {
    const errors = {};
    if (
      !inputHasSpecialChac(nameValues.firstName) ||
      nameValues.firstName.length <= 2
    ) {
      errors.firstName = errors.firstName = "Error first name";
    }
    if (
      !inputHasSpecialChac(nameValues.lastName) ||
      nameValues.lastName.length <= 2
    ) {
      errors.lastName = errors.lastName = "Error last name";
    }
    if (nameValues.userName.length <= 1) {
      errors.userName = errors.userName = "Error username";
    }

    return errors;
  };
  // console.log(inputHasSpecialChac(nameValues.lastName));

  const conBtn = () => {
    const errors = checkInput();

    if (Object.keys(errors).length === 0) {
      setErrorState({});
      stepOneLocal(nameValues);
      handlenextStep();
    } else {
      setErrorState(errors);
    }
  };

  return (
    <div className="back">
      <div className="back1">
        <div className="q">
          <div className="q1">
            <img src="/Main 1.svg" alt="pinelogo" className="logo" />
            <p className="emoji">{"Join Us! 😎"}</p>
            <p className="word">
              {"Please provide all current information accurately."}
            </p>
          </div>

          <div className="q2">
            <FormInput
              inputTag={"First Name"}
              inputOnChange={handleInputChange}
              inputValue={nameValues.firstName}
              inputName={"firstName"}
              inputPlaceHolder={"Placeholder"}
              error={errorState.firstName}
              errorMessage={
                "First name cannot contain special characters or numbers."
              }
            />

            <FormInput
              inputTag={"Last Name"}
              inputOnChange={handleInputChange}
              inputValue={nameValues.lastName}
              inputName={"lastName"}
              inputPlaceHolder={"Placeholder"}
              error={errorState.lastName}
              errorMessage={
                "Last name cannot contain special characters or numbers."
              }
            />

            <FormInput
              inputTag={"Username"}
              inputOnChange={handleInputChange}
              inputValue={nameValues.userName}
              inputName={"userName"}
              inputPlaceHolder={"Placeholder"}
              error={errorState.userName}
              errorMessage={
                "This username is already taken. Please choose another one."
              }
            />
          </div>
        </div>
        <button className="continueBtn" onClick={conBtn}>
          Continue 1/3 &gt;
        </button>
      </div>
    </div>
  );
};
