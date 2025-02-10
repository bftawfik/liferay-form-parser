import { FormControl } from "@mui/material";
import { FieldType } from "../../../../../types/forms";
import Box from "@mui/material/Box";
import MuiTextField from "@mui/material/TextField";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import parse from "html-react-parser"; // ✅ Import html-react-parser

interface ParagraphFieldType {
  formData: FieldType;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const ParagraphField: React.FC<ParagraphFieldType> = ({
  formData,
  register,
  errors,
}) => {
  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={formData.label}
        tooltip={formData.tooltip}
        showLabel={formData.showLabel}
      >
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { mt: 1, width: "100%" } }}
          noValidate
          autoComplete="off"
        >
          {formData.text && <div className="mt-2">{parse(formData.text)}</div>}
        </Box>
        {errors[formData.name]?.message && (
          <p role="alert">{`${errors[formData.name]?.message}`}</p>
        )}
      </FormLabelAndTooltip>
    </FormControl>
  );
};
export default ParagraphField;
