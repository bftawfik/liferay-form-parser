import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FormFieldOption } from "../../../types/forms";
import { useState } from "react";

export const DropDownList = ({ options }: { options: FormFieldOption[] }) => {
  if (options) {
    return (
      <div className="mt-4">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-autowidth-label">
            Choose an option
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            label="Choose an option"
          >
            {options.map((option: FormFieldOption) => {
              return (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  className="w-full"
                >
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    );
  } else {
    return <div>No options available</div>;
  }
};
