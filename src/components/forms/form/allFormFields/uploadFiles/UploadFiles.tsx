import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { FormControl } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
interface uploadFilesType {
  formData: FieldType;
}

const UploadFiles: React.FC<uploadFilesType> = ({ formData }) => {
  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={formData.label}
        tooltip={formData.tooltip}
        showLabel={formData.showLabel}
      >
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{ mt: 1 }}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
      </FormLabelAndTooltip>
    </FormControl>
  );
};
export default UploadFiles;
