import { FormControl } from "@mui/material";
import { AllLanguages, TextFieldType } from "../../../../../types/forms";
import Box from "@mui/material/Box";
import MuiTextField from "@mui/material/TextField";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { getValueOf } from "../../../../../helpers/lang";
interface TextFieldPropsType {
  formData: TextFieldType;
  language: AllLanguages;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const TextField: React.FC<TextFieldPropsType> = ({
  formData,
  language,
  register,
  errors,
}) => {
  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={getValueOf(formData.label, language)}
        tooltip={getValueOf(formData.tip, language)}
        showLabel={formData.showLabel}
      >
        <Box
          component="form"
          sx={{ "& > :not(style)": { mt: 2, width: "100%" } }}
          noValidate
          autoComplete="off"
        >
          <MuiTextField
            id="outlined-basic"
            label={getValueOf(formData.placeholder, language)}
            value={getValueOf(formData.predefinedValue, language)}
            variant="outlined"
            multiline={formData.displayStyle === "multiline"}
            rows={formData.displayStyle === "multiline" ? 4 : 1}
            {...register(formData.name)}
          />
        </Box>
        {errors[formData.name]?.message && (
          <p role="alert">{`${errors[formData.name]?.message}`}</p>
        )}
      </FormLabelAndTooltip>
    </FormControl>
  );
};
export default TextField;
