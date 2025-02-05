import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FormDefinitionType } from "../../../types/forms";
import { apiUrls } from "../../../constants/apiUrls";

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
    <div>
      <h3>Form {formid}</h3>
      <div>
        {!loading && data
          ? data.structure.formPages.map((page, pgNdx) => (
              <div key={pgNdx + page.headline}>
                <h3>{page.headline}</h3>
                <div>
                  {page.formFields.map((formField) => (
                    <div key={formField.name}>{formField.inputControl}</div>
                  ))}
                </div>
              </div>
            ))
          : error && <div>{error}</div>}
      </div>
    </div>
  );
};
