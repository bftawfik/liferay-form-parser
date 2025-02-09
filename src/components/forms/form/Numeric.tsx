import { Unstable_NumberInput as NumberInput } from "@mui/base";
import { FieldType } from "../../../types/forms";

export const Numeric = ({ formData }: { formData: FieldType }) => {
  return (
    <div>
      {formData.showLabel && <h6 className="text-lg">{formData.label}</h6>}
      <NumberInput
        aria-label="Demo number input"
        placeholder={formData.placeholder}
      />
      {formData.tooltip && (
        <h6 className="text-sm mt-2 text-gray-400">{formData.tooltip}</h6>
      )}
    </div>
  );
};
