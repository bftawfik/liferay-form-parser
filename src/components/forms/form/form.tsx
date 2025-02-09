import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FormDefinitionType } from "../../../types/forms";
import { apiUrls } from "../../../constants/apiUrls";

import { StepperComponent } from "./stepperComponent/stepperComponent";
import Loader from "../../loader/Loader";
import { ErrorMsg } from "../../errorMsg/errorMsg";

export const Form = () => {
  const [data, setData] = useState<FormDefinitionType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const { formid } = useParams();

  const apiURL = `${process.env.REACT_APP_API_SERVER_URL}:${process.env.REACT_APP_API_SERVER_PORT}${apiUrls.formById}`;

  const fetchData = useCallback(async () => {
    const authHeader =
      "Basic " +
      btoa(
        `${process.env.REACT_APP_USER_USERNAME}:${process.env.REACT_APP_USER_PASSWORD}`
      );

    try {
      const response = await fetch(`${apiURL}/${formid}`, {
        method: "GET",
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = (await response.json()) as FormDefinitionType;
      setData(result);
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  }, [apiURL, formid]);

  useEffect(() => {
    fetchData();
  }, [fetchData, formid]);

  return (
    <div className="m-14 p-8 bg-white shadow-lg rounded-lg ">
      <h3 className="text-4xl font-semibold mb-4 ">Form {formid}</h3>
      {loading && <Loader />}
      {!data && <ErrorMsg message={error ?? "No Data"} />}
      {data && (
        <StepperComponent
          pages={data.structure.formPages}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )}
    </div>
  );
};
