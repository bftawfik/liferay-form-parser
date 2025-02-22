import { AllLanguages, ColorFieldType } from "../../../../../types/forms";
import { FormControl, Popover, TextField, Box } from "@mui/material";
import { useState } from "react";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { SketchPicker } from "react-color";
import { getValueOf } from "../../../../../helpers/lang";

interface ColorPickerType {
  formData: ColorFieldType;
  language: AllLanguages;
}

const ColorSelector: React.FC<ColorPickerType> = ({ formData, language }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [color, setColor] = useState<string>(
    (("#" + getValueOf(formData.predefinedValue, language)) as string) ||
      "#000000"
  );

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (newColor: any) => {
    const selectedColor = newColor.hex;
    setColor(selectedColor);
  };

  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={getValueOf(formData.label, language)}
        tooltip={getValueOf(formData.tip, language)}
        showLabel={formData.showLabel}
      >
        <Box className="mt-1">
          <TextField
            value={color}
            onClick={handleOpen}
            InputProps={{
              readOnly: true,
              startAdornment: (
                <Box
                  sx={{
                    width: 28,
                    height: 24,
                    backgroundColor: color,
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginRight: 1,
                  }}
                  onClick={handleOpen}
                />
              ),
            }}
          />
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <SketchPicker color={color} onChange={handleColorChange} />
          </Popover>
        </Box>
      </FormLabelAndTooltip>
    </FormControl>
  );
};

export default ColorSelector;
