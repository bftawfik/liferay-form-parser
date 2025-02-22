import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  AllLanguages,
  FieldType,
  ImageFieldType,
} from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { FormControl, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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

interface UploadImageType {
  formData: ImageFieldType;
  language: AllLanguages;
}

const UploadImage: React.FC<UploadImageType> = ({ formData, language }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    if (formData.predefinedValue) {
      try {
        const parsedValue = JSON.parse(formData.predefinedValue as string);
        if (parsedValue.url) {
          setSelectedImages([parsedValue.url]);
        }
      } catch (error) {
        console.error("Error parsing predefinedValue:", error);
      }
    }
  }, [formData.predefinedValue]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const imageUrls = filesArray
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => URL.createObjectURL(file));

      setSelectedImages((prevImages) => [...prevImages, ...imageUrls]);
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
          Upload images
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            multiple
          />
        </Button>
      </FormLabelAndTooltip>

      {selectedImages.length > 0 && (
        <List sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 2 }}>
          {selectedImages.map((imageUrl, index) => (
            <ListItem key={index} sx={{ listStyle: "none", p: 0 }}>
              <img
                src={imageUrl}
                alt={`Uploaded ${index}`}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </FormControl>
  );
};

export default UploadImage;
