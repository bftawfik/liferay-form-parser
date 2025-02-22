import { FormControl } from "@mui/material";
import { AllLanguages, DateFieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getValueOf } from "../../../../../helpers/lang";

interface DateFieldPropsType {
  formData: DateFieldType;
  language: AllLanguages;
}
const DateFormField: React.FC<DateFieldPropsType> = ({
  formData,
  language,
}) => {
  const dateString = getValueOf(formData.predefinedValue, language);
  const preDefinedDate = dateString ? dayjs(dateString) : null;
  const [currentDate, setCurrentDate] = useState<Dayjs | null>(preDefinedDate);
  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={getValueOf(formData.label, language)}
        tooltip={getValueOf(formData.tip, language)}
        showLabel={formData.showLabel}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
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
export default DateFormField;
