type DisplayStyle = "singleline" | "";

interface FormFieldOption {
  label: string;
  value: string;
}

type TextInputControl = "text";
type RadioInputControl = "radio";
type ImageInputControl = "image";
type SelectInputControl = "select";
type RichTextInputControl = "rich_text";

type InputControl =
  | TextInputControl
  | RadioInputControl
  | ImageInputControl
  | SelectInputControl
  | RichTextInputControl;

interface FieldType {
  dataType: string;
  displayStyle: DisplayStyle;
  formFieldOptions: FormFieldOption[];
  hasFormRules: boolean;
  immutable: boolean;
  inputControl: InputControl;
  label: string;
  localizable: boolean;
  multiple: boolean;
  name: string;
  repeatable: boolean;
  required: boolean;
  showLabel: boolean;
}

interface TextFieldType extends FieldType {
  inputControl: TextInputControl;
  placeholder: string;
  predefinedValue: string;
  tooltip: string;
}

interface RadioFieldType extends FieldType {
  inputControl: RadioInputControl;
  formFieldOptions: FormFieldOption[];
  multiple: boolean;
  predefinedValue: string;
  repeatable: boolean;
  required: boolean;
  showLabel: boolean;
  tooltip: string;
}

interface ImageFieldType extends FieldType {
  inputControl: ImageInputControl;
  predefinedValue: string;
  tooltip: string;
}

interface SelectFieldType extends FieldType {
  inputControl: SelectInputControl;
  predefinedValue: string;
  tooltip: string;
}

interface RichTextFieldType extends FieldType {
  inputControl: RichTextInputControl;
  predefinedValue: string;
  tooltip: string;
}

type AllFieldsType =
  | TextFieldType
  | RadioFieldType
  | ImageFieldType
  | SelectFieldType
  | RichTextFieldType;
//---------------------------------------------------------------

type FormPageType = {
  formFields: AllFieldsType[];
  headline: string;
  text: string;
};
interface StructureType {
  formPages: FormPageType[];
}

export interface FormDefinitionType {
  structure: StructureType;
}
//---------------------------------------------------------------
