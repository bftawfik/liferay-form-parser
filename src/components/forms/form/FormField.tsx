import { TextField } from "@mui/material";
import { FieldType } from "../../../types/forms";
import { CheckBoxMultiple } from "./CheckBoxMultiple";
import { DropDownList } from "./DropDownList";

import { Numeric } from "./Numeric";
import { SingleCheckbox } from "./SingleCheckbox";
import { SingleSelection } from "./SingleSelection";
import { TextFieldForm } from "./TextField";
export const FormField = ({ formData }: { formData: FieldType }) => {
  let formSelection: JSX.Element | null = null;
  switch (formData?.inputControl) {
    case "checkbox_multiple":
      formSelection = <CheckBoxMultiple formData={formData} />;
      break;
    case "radio":
      formSelection = <SingleSelection formData={formData} />;
      break;
    case "select":
      formSelection = <DropDownList formData={formData} />;
      break;
    case "checkbox":
      formSelection = <SingleCheckbox formData={formData} />;
      break;
    case "numeric":
      formSelection = <Numeric formData={formData} />;
      break;
    case "text":
      formSelection = <TextFieldForm formData={formData} />;
      break;
    default:
      formSelection = <div>no options</div>;
  }
  return <div className="mb-4">{formSelection}</div>;
};
