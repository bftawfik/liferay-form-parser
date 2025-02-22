import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  AllLanguages,
  DocumentLibraryFieldType,
  FieldType,
} from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { FormControl, List, ListItem, Typography } from "@mui/material";
import { getValueOf } from "../../../../../helpers/lang";

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

interface UploadFilesType {
  formData: DocumentLibraryFieldType;
  language: AllLanguages;
}

const UploadFiles: React.FC<UploadFilesType> = ({ formData, language }) => {
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
    }
  };

  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={getValueOf(formData.label, language)}
        tooltip={getValueOf(formData.tip, language)}
        showLabel={formData.showLabel}
      >
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ mt: 1 }}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={handleFileChange}
            multiple
          />
        </Button>
      </FormLabelAndTooltip>

      {selectedFiles.length > 0 && (
        <List sx={{ mt: 2 }}>
          {selectedFiles.map((file, index) => (
            <ListItem key={index}>
              <Typography variant="body2">{file.name}</Typography>
            </ListItem>
          ))}
        </List>
      )}
    </FormControl>
  );
};

export default UploadFiles;
