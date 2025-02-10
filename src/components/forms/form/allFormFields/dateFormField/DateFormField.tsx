import { FormControl } from "@mui/material";
import { FieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateFormField = ({ formData }: { formData: FieldType }) => {
  const dateString = formData.predefinedValue;
  const preDefinedDate = dateString ? dayjs(dateString) : null;
  const [currentDate, SetCurrentDate] = useState<Dayjs | null>(preDefinedDate);
  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={formData.label}
        tooltip={formData.tooltip}
        showLabel={formData.showLabel}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={currentDate}
            onChange={(newValue) => SetCurrentDate(newValue)}
            sx={{ mt: 2, width: "100%" }}
          />
        </LocalizationProvider>
      </FormLabelAndTooltip>
    </FormControl>
  );
};
export default DateFormField;
