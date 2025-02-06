import { FieldType } from "../../../types/forms";
import { CheckBoxMultiple } from "./CheckBoxMultiple";
import { DropDownList } from "./DropDownList";
import { SingleSelection } from "./SingleSelection";
export const FormField = ({ formData }: { formData: FieldType }) => {
  let formSelection: JSX.Element | null = null;
  switch (formData?.inputControl) {
    case "checkbox_multiple":
      formSelection = <CheckBoxMultiple options={formData.formFieldOptions} />;
      break;
    case "radio":
      formSelection = <SingleSelection options={formData.formFieldOptions} />;
      break;
    case "select":
      formSelection = <DropDownList options={formData.formFieldOptions} />;
      break;
    default:
      formSelection = <div>no options</div>;
  }
  return (
    <div className="mb-4">
      <h6 className="text-lg">{formData?.label}</h6>
      {formSelection}
    </div>
  );
};
