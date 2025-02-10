import { FieldType } from "../../../../types/forms";
import TextField from "../allFormFields/textField/TextField";
import CheckBoxMultiple from "../allFormFields/checkBoxMultiple/CheckBoxMultiple";
import DropDownList from "../allFormFields/dropDownList/DropDownList";
import SingleCheckbox from "../allFormFields/singleCheckbox/SingleCheckbox";
import Numeric from "../allFormFields/numeric/Numeric";
import SingleSelection from "../allFormFields/singleSelection/SingleSelection";
import DateFormField from "../allFormFields/dateFormField/DateFormField";
import DateAndTimeField from "../allFormFields/dateTimeField/DateAndTimeField";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface FormFieldType {
  formData: FieldType;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
export const FormField: React.FC<FormFieldType> = ({
  formData,
  register,
  errors,
}) => {
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
      formSelection = (
        <TextField register={register} errors={errors} formData={formData} />
      );
      break;
    case "date":
      formSelection = <DateFormField formData={formData} />;
      break;
    case "date_time":
      formSelection = <DateAndTimeField formData={formData} />;
      break;
    default:
      formSelection = <div>no options</div>;
  }
  return <div className="mb-4">{formSelection}</div>;
};
