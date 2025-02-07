import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FormDefinitionType } from "../../../types/forms";
import { apiUrls } from "../../../constants/apiUrls";
import { FormField } from "./FormField";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Form = () => {
  const [data, setData] = useState<FormDefinitionType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const activePage =
    !loading && data ? data.structure.formPages[activeStep] : null;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
      {!loading && data ? (
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {data.structure.formPages.map((page, ndx) => (
              <Step key={ndx + page.headline}>
                <StepLabel>{page.headline || `Page ${ndx}`}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ width: "100%" }}>
            {activeStep === data.structure.formPages.length ? (
              <>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  {!loading && data && activePage ? (
                    <div>
                      <h3 className="text-2xl  mb-2 mt-4">
                        {activePage.headline}
                      </h3>
                      <div className="p-2">
                        {activePage.formFields.map((formField) => (
                          <FormField
                            key={formField.name}
                            formData={formField}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    error && <div>{error}</div>
                  )}
                </div>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Button onClick={handleNext}>
                    {activeStep === data.structure.formPages.length - 1
                      ? "Finish"
                      : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      ) : null}
    </div>
  );
};
