import React, { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { FormDefinitionType } from "../../../types/forms";
// import { FormDefinitionType, TextFieldType } from "../../../types/forms";
import { apiUrls } from "../../../constants/apiUrls";
import { StepperComponent } from "./stepperComponent/StepperComponent";
import Loader from "../../loader/Loader";
import { ErrorMassage } from "../../errorMassage/ErrorMassage";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { getLanguage } from "../../../helpers/lang";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { schemaBuilder } from "../../../helpers/form";

export const Form = () => {
  const [data, setData] = useState<FormDefinitionType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = React.useState(0);

  console.log("Data: ", data);

  // const schema = schemaBuilder(data?.definition.formPages || []);

  // console.log("Schema: ", schema);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const onSubmit: SubmitHandler<FieldValues> = (data) =>
    console.log("Submit: ", data);

  const { formid } = useParams();
  const [searchParams] = useSearchParams();
  const language = getLanguage(searchParams.get("lang"));

  // const apiURL = `${process.env.REACT_APP_API_SERVER_URL}:${process.env.REACT_APP_API_SERVER_PORT}${apiUrls.formById}`;

  const apiURL = `${process.env.REACT_APP_API_SERVER_URL}${apiUrls.formByIdMock}`;

  const fetchData = useCallback(async () => {
    const authHeader =
      "Basic " +
      btoa(
        `${process.env.REACT_APP_USER_USERNAME}:${process.env.REACT_APP_USER_PASSWORD}`
      );

    try {
      console.log("apiUrl", process.env.REACT_APP_API_SERVER_URL);
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
      {!data && <ErrorMassage message={error ?? "No Data"} />}
      {data && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <StepperComponent
            pages={data.definition.formPages}
            language={language}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            register={register}
            errors={errors}
          />
        </form>
      )}
    </div>
  );
};
