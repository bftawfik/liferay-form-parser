import { FormControl } from "@mui/material";
import { AllLanguages, DateTimeFieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getValueOf } from "../../../../../helpers/lang";
interface DateAndTimeFieldPropsType {
  formData: DateTimeFieldType;
  language: AllLanguages;
}
const DateAndTimeField: React.FC<DateAndTimeFieldPropsType> = ({
  formData,
  language,
}) => {
  const dateString = getValueOf(formData.predefinedValue, language);
  const preDefinedDate = dayjs(dateString);
  const [currentDate, setCurrentDate] = useState<Dayjs | null>(preDefinedDate);
  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={getValueOf(formData.label, language)}
        tooltip={getValueOf(formData.tip, language)}
        showLabel={formData.showLabel}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Controlled picker"
            value={currentDate}
            onChange={(newValue) => setCurrentDate(newValue)}
            sx={{ mt: 2, width: "100%" }}
          />
        </LocalizationProvider>
      </FormLabelAndTooltip>
    </FormControl>
  );
};
export default DateAndTimeField;
