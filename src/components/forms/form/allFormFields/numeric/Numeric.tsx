import { Unstable_NumberInput as NumberInput } from "@mui/base";
import { FieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";

interface NumericType {
  formData: FieldType;
}

const Numeric: React.FC<NumericType> = ({ formData }) => {
  return (
    <div>
      <FormLabelAndTooltip
        label={formData.label}
        tooltip={formData.tooltip}
        showLabel={formData.showLabel}
      >
        <NumberInput
          aria-label="Demo number input"
          placeholder={formData.placeholder}
        />
      </FormLabelAndTooltip>
    </div>
  );
};

export default Numeric;
