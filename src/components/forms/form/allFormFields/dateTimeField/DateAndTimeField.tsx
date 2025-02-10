import { FormControl } from "@mui/material";
import { FieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
interface DateAndTimeFieldType {
  formData: FieldType;
}
const DateAndTimeField: React.FC<DateAndTimeFieldType> = ({ formData }) => {
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
          <DateTimePicker
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
export default DateAndTimeField;
