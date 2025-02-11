import { FieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { FormControl } from "@mui/material";
import MuiTextField from "@mui/material/TextField";

interface NumericType {
  formData: FieldType;
}

const Numeric: React.FC<NumericType> = ({ formData }) => {
  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={formData.label}
        tooltip={formData.tooltip}
        showLabel={formData.showLabel}
      >
        <MuiTextField
          type="number"
          placeholder={formData.placeholder}
          defaultValue={formData.predefinedValue}
          variant="outlined"
          sx={{ mt: 2 }}
          fullWidth
        />
      </FormLabelAndTooltip>
    </FormControl>
  );
};

export default Numeric;
