"use client";
import { useState } from "react";

const StepThreeLocalDate = (values) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("stepThreeDate", values);
  }
};

const StepThreeLocalImage = (imageValues) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("stepThreeImage", JSON.stringify(imageValues));
  }
};

export const StepThree = (props) => {
  const { handlenextStep, handlebackStep } = props;

  const getItemFronLocalStepthreeDate = () => {
    if (typeof window !== "undefined") {
      const values = localStorage.getItem("stepThreeDate");
      if (values) {
        return { values };
      }
    }
    return {
      date: "",
    };
  };

  const getItemFronLocalStepthreeImage = () => {
    if (typeof window !== "undefined") {
      const imageValues = localStorage.getItem("stepThreeImage");
      if (imageValues) {
        return JSON.parse(imageValues);
      }
    }
    return null;
  };

  const [date, setDate] = useState(getItemFronLocalStepthreeDate);

  const [image, setImage] = useState(getItemFronLocalStepthreeImage);

  // console.log("this is type of image", typeof image);
  // console.log("this is type of date", typeof date);
  // console.log("string object image", JSON.stringify(image));
  // console.log(JSON.parse(image));

  const [errorState, setErrorState] = useState(false);

  const dateInput = (event) => {
    const inputValue = event.target.value;
    setDate(inputValue);
  };

  const newDate = new Date();
  const rightNowYear =
    newDate.getFullYear() + (newDate.getMonth() / 12 + newDate.getDate() / 365);
  const myBirthYear = new Date(date);
  const ageRightNow =
    myBirthYear.getFullYear() +
    (myBirthYear.getMonth() / 12 + myBirthYear.getDate() / 365);
  const yearDiff = rightNowYear - ageRightNow;
  const errors = {};

  const imageChange = (event) => {
    const imageDisplay = event.target.files[0];
    if (imageDisplay) {
      setImage(URL.createObjectURL(imageDisplay));
    }
  };
  const imageRemove = () => {
    setImage(null);
  };

  const checkInput = () => {
    if (date.length === 0 || yearDiff <= 18) {
      errors.date = "Error date";
    }
    if (!image) {
      errors.image = "error image";
    }
    return errors;
  };

  const conBtn = () => {
    const errors = checkInput();

    if (Object.keys(errors).length === 0) {
      setErrorState({});
      StepThreeLocalDate(date);
      StepThreeLocalImage(image);
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
            <div className="firstNameDiv">
              <p className="firstName">
                {"Date of Birth"} <span className="od">{"*"}</span>
              </p>
              <input
                name="dateOfBirth"
                type="date"
                className={`firstInput ${errorState.date ? "input-error" : ""}`}
                onChange={dateInput}
              ></input>
              {errorState.date && (
                <p className="errorfirst">
                  {"Please select a date and you must be older than 18."}
                </p>
              )}
            </div>

            <label className="imageUpload" htmlFor="image-upload">
              <p className="firstName">
                {"Profile image"} <span className="od">{"*"}</span>
              </p>

              {!image && (
                <div className="display">
                  <input
                    id="image-upload"
                    type="file"
                    className="image"
                    onChange={imageChange}
                    style={{ display: "none" }}
                  />
                  <img src="camer.png" className="addImage" />
                  <p className="addImageWord">{"Add image"}</p>
                </div>
              )}

              {image && (
                <div className="uploadedImageDisplay">
                  <img src={image} className="uploadedImage" />
                  <button onClick={imageRemove} className="imageRemoveBtn">
                    {"X"}
                  </button>
                </div>
              )}
            </label>
            {errorState.image && (
              <p className="errorfirst">{"Image cannot be blank."}</p>
            )}
          </div>

        </div>
        <div className="backandnext">
          <button className="backBtn" onClick={handlebackStep}>
            &lt; Back
          </button>
          <button className="conBtn" onClick={conBtn}>
            Submit 3/3 &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
