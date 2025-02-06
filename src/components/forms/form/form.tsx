import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FormDefinitionType } from "../../../types/forms";
import { apiUrls } from "../../../constants/apiUrls";
import { FormField } from "./FormField";

export const Form = () => {
  const [data, setData] = useState<FormDefinitionType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
      <hr />
      <div className="space-y-4">
        {!loading && data
          ? data.structure.formPages.map((page, pgNdx) => (
              <div key={pgNdx + page.headline}>
                <h3 className="text-2xl  mb-2 mt-4">{page.headline}</h3>
                <div className="p-2">
                  {page.formFields.map((formField) => (
                    // <div key={formField.name}>{formField.inputControl}</div>
                    <FormField key={formField.name} formData={formField} />
                  ))}
                </div>
              </div>
            ))
          : error && <div>{error}</div>}
      </div>
    </div>
  );
};
