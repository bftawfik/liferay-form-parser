import { FormControl } from "@mui/material";
import { FieldType } from "../../../../../types/forms";
import Box from "@mui/material/Box";
import MuiTextField from "@mui/material/TextField";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextFieldType {
  formData: FieldType;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const TextField: React.FC<TextFieldType> = ({ formData, register, errors }) => {
  return (
    <FormControl fullWidth>
      {formData.showLabel && <h6 className="text-lg">{formData.label}</h6>}
      <Box
        component="form"
        sx={{ "& > :not(style)": { mt: 2, width: "100%" } }}
        noValidate
        autoComplete="off"
      >
        <MuiTextField
          id="outlined-basic"
          label={formData.placeholder}
          variant="outlined"
          {...register(formData.name)}
        />
      </Box>
      {formData.tooltip && (
        <h6 className="text-sm mt-2 text-gray-400">{formData.tooltip}</h6>
      )}
      {errors[formData.name]?.message && (
        <p role="alert">{`${errors[formData.name]?.message}`}</p>
      )}
    </FormControl>
  );
};
export default TextField;
