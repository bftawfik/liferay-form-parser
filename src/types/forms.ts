type DisplayStyle = "singleline" | "";

interface FormFieldOption {
  label: string;
  value: string;
}

interface ValidationType {
  errorMessage: string;
}

type TextInputControl = "text";
type RadioInputControl = "radio";
type ImageInputControl = "image";
type SelectInputControl = "select";
type RichTextInputControl = "rich_text";
type FieldsetInputControl = "fieldset";
type CheckboxMultipleInputControl = "checkbox_multiple";
type DateInputControl = "date";
type DocumentLibraryInputControl = "document_library";

type InputControl =
  | TextInputControl
  | RadioInputControl
  | ImageInputControl
  | SelectInputControl
  | RichTextInputControl
  | FieldsetInputControl
  | CheckboxMultipleInputControl
  | DateInputControl
  | DocumentLibraryInputControl;

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

interface FieldsetFieldType extends FieldType {
  inputControl: FieldsetInputControl;
}

interface CheckboxMultipleFieldType extends FieldType {
  inputControl: CheckboxMultipleInputControl;
  predefinedValue: string;
  showAsSwitcher: boolean;
  tooltip: string;
}

interface DateFieldType extends FieldType {
  inputControl: DateInputControl;
  predefinedValue: string;
  tooltip: string;
  validation: ValidationType;
}

interface DocumentLibraryFieldType extends FieldType {
  inputControl: DocumentLibraryInputControl;
  predefinedValue: string;
  tooltip: string;
}

type AllFieldsType =
  | TextFieldType
  | RadioFieldType
  | ImageFieldType
  | SelectFieldType
  | RichTextFieldType
  | FieldsetFieldType
  | CheckboxMultipleFieldType
  | DateFieldType
  | DocumentLibraryFieldType;
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
