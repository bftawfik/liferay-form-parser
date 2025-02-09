import { FormControl } from "@mui/material";
import { FieldType } from "../../../types/forms";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextFieldForm = ({ formData }: { formData: FieldType }) => {
  return (
    <FormControl fullWidth>
      {formData.showLabel && <h6 className="text-lg">{formData.label}</h6>}
      <Box
        component="form"
        sx={{ "& > :not(style)": { mt: 2, width: "100%" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label={formData.placeholder}
          variant="outlined"
        />
      </Box>
      {formData.tooltip && (
        <h6 className="text-sm mt-2 text-gray-400">{formData.tooltip}</h6>
      )}
    </FormControl>
  );
};
