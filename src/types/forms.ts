type DisplayStyle = "singleline" | "singleline2";

interface FormFieldOption {
  label: string;
  value: string;
}

type TextInputControl = "text";
// type InputControl = TextInputControl;

interface TextFieldType {
  dataType: string;
  displayStyle: DisplayStyle;
  formFieldOptions: FormFieldOption[];
  hasFormRules: boolean;
  immutable: boolean;
  inputControl: TextInputControl;
  label: string;
  localizable: boolean;
  multiple: boolean;
  name: string;
  placeholder: string;
  predefinedValue: string;
  repeatable: boolean;
  required: boolean;
  showLabel: boolean;
  tooltip: string;
}
type FieldType = TextFieldType;
type FormPageType = {
  formFields: FieldType[];
  headline: string;
  text: string;
};
interface StructureType {
  formPages: FormPageType[];
}

export interface FormDefinitionType {
  structure: StructureType;
}
