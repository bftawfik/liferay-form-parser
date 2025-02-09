import { FieldType } from "../../../types/forms";
import { CheckBoxMultiple } from "./CheckBoxMultiple";
import { DropDownList } from "./DropDownList";

import { Numeric } from "./Numeric";
import { SingleCheckbox } from "./SingleCheckbox";
import { SingleSelection } from "./SingleSelection";
export const FormField = ({ formData }: { formData: FieldType }) => {
  let formSelection: JSX.Element | null = null;
  switch (formData?.inputControl) {
    case "checkbox_multiple":
      formSelection = (
        <CheckBoxMultiple
          options={formData.formFieldOptions}
          label={formData.label}
        />
      );
      break;
    case "radio":
      formSelection = (
        <SingleSelection
          options={formData.formFieldOptions}
          label={formData.label}
        />
      );
      break;
    case "select":
      formSelection = (
        <DropDownList
          options={formData.formFieldOptions}
          label={formData.label}
        />
      );
      break;
    case "checkbox":
      formSelection = <SingleCheckbox label={formData.label} />;
      break;
    case "numeric":
      formSelection = <Numeric label={formData.label} />;
      break;

    default:
      formSelection = <div>no options</div>;
  }
  return <div className="mb-4">{formSelection}</div>;
};
