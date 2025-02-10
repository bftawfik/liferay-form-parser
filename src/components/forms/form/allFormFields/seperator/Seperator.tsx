import { FieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
interface SeparatorType {
  formData: FieldType;
}
const Separator: React.FC<SeparatorType> = ({ formData }) => {
  return (
    <FormLabelAndTooltip
      label={formData.label}
      tooltip={formData.tooltip}
      showLabel={formData.showLabel}
    >
      <hr />
    </FormLabelAndTooltip>
  );
};

export default Separator;
