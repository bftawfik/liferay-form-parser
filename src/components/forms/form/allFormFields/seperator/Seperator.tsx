import { getValueOf } from "../../../../../helpers/lang";
import { AllLanguages, SeparatorFieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
interface SeparatorType {
  formData: SeparatorFieldType;
  language: AllLanguages;
}
const Separator: React.FC<SeparatorType> = ({ formData, language }) => {
  return (
    <FormLabelAndTooltip
      label={getValueOf(formData.label, language)}
      tooltip={getValueOf(formData.tip, language)}
      showLabel={formData.showLabel}
    >
      <hr />
    </FormLabelAndTooltip>
  );
};

export default Separator;
