import * as yup from "yup";
import {
  FormPageType,
  InputControl,
  TextFieldType,
  TextInputControl,
} from "../types/forms";

function isTextInputControl(type: InputControl): type is TextInputControl {
  return true;
}

const addRequired = (
  stringSchema: yup.StringSchema,
  required: boolean,
  ErrorMessage: string = "This Field is required"
) => (required ? stringSchema.required(ErrorMessage) : stringSchema);
const escSpecialCharacters = (parameter: string) =>
  parameter.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
const addMatch = (
  stringSchema: yup.StringSchema,
  matchType: string,
  parameter: string,
  ErrorMessage: string = 'String must contain "hope"'
) => {
  switch (matchType) {
    case "contain": {
      return stringSchema.matches(
        new RegExp(escSpecialCharacters(parameter), "i"),
        ErrorMessage
      );
    }
    case "notContains": {
      return stringSchema.matches(
        new RegExp(`^(?!.*${escSpecialCharacters(parameter)}).*$`, "i"),
        ErrorMessage
      );
    }
    default: {
      return stringSchema;
    }
  }
};

const addStringSchema = (feild: TextFieldType) => {
  let stringSchema = addRequired(
    yup.string(),
    feild.required,
    feild.requiredErrorMessage?.en_US
  );

  if (
    feild.validation?.expression.name === "contains" ||
    feild.validation?.expression.name === "notContains"
  ) {
    addMatch(
      stringSchema,
      feild.validation?.expression.name,
      feild.validation?.parameter.en_US,
      feild.validation?.errorMessage.en_US
    );
  }
  return stringSchema;
};

export const schemaBuilder = (formPages: FormPageType[]) => {
  const formFields = formPages.map((page) => page.fields).flat();
  const formFieldsObject = formFields.reduce((accum, field) => {
    return {
      ...accum,
      [field.name]: isTextInputControl(field.type)
        ? addStringSchema(field as TextFieldType)
        : undefined,
    };
  }, {});

  return yup.object(formFieldsObject).required();
};
