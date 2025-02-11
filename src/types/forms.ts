type DisplayStyle = "singleline" | "multiline" | "";

export interface FormFieldOption {
  label: string;
  value: string;
}

interface ValidationType {
  errorMessage: string;
}

type ParagraphInputControl = "paragraph";
type TextInputControl = "text";
type SelectInputControl = "select";
type RadioInputControl = "radio";
type CheckboxMultipleInputControl = "checkbox_multiple";
type GridInputControl = "grid";
type DateInputControl = "date";
type DateTimeInputControl = "date_time";
type NumericInputControl = "numeric";
type CheckboxInputControl = "checkbox";
type ImageInputControl = "image";
type RichTextInputControl = "rich_text";
type DocumentLibraryInputControl = "document_library";
type ColorInputControl = "color";
type SearchLocationInputControl = "search_location";
type SeparatorInputControl = "separator";

type InputControl =
  | ParagraphInputControl
  | TextInputControl
  | SelectInputControl
  | RadioInputControl
  | CheckboxMultipleInputControl
  | GridInputControl
  | DateInputControl
  | DateTimeInputControl
  | NumericInputControl
  | CheckboxInputControl
  | ImageInputControl
  | RichTextInputControl
  | DocumentLibraryInputControl
  | ColorInputControl
  | SearchLocationInputControl
  | SeparatorInputControl;

interface GridType {
  columns: FormFieldOption[];
  rows: FormFieldOption[];
}

//---------------------------------------------------------------

export interface FieldType {
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
  tooltip?: string;
  placeholder?: string;
  predefinedValue?: string| number;
  text?:string;
  showAsSwitcher?: boolean;
}

interface ParagraphFieldType extends FieldType {
  inputControl: ParagraphInputControl;
  text: string;
  predefinedValue: string;
  tooltip: string;
}

interface TextFieldType extends FieldType {
  inputControl: TextInputControl;
  placeholder: string;
  predefinedValue: string;
  tooltip: string;
}

interface SelectFieldType extends FieldType {
  inputControl: SelectInputControl;
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

interface CheckboxMultipleFieldType extends FieldType {
  inputControl: CheckboxMultipleInputControl;
  predefinedValue: string;
  showAsSwitcher: boolean;
  tooltip: string;
}

interface GridFieldType extends FieldType {
  inputControl: GridInputControl;
  grid: GridType;
  predefinedValue: string;
  tooltip: string;
}

interface DateFieldType extends FieldType {
  inputControl: DateInputControl;
  predefinedValue: string;
  tooltip: string;
  validation: ValidationType;
}

interface DateTimeFieldType extends FieldType {
  inputControl: DateTimeInputControl;
  predefinedValue: string;
  tooltip: string;
}

interface NumericFieldType extends FieldType {
  inputControl: NumericInputControl;
  placeholder: string;
  predefinedValue: string;
  tooltip: string;
}

interface CheckboxFieldType extends FieldType {
  inputControl: CheckboxInputControl;
  predefinedValue: string;
  showAsSwitcher: boolean;
  tooltip: string;
}

interface ImageFieldType extends FieldType {
  inputControl: ImageInputControl;
  predefinedValue: string;
  tooltip: string;
}

interface RichTextFieldType extends FieldType {
  inputControl: RichTextInputControl;
  predefinedValue: string;
  tooltip: string;
}

interface DocumentLibraryFieldType extends FieldType {
  inputControl: DocumentLibraryInputControl;
  predefinedValue: string;
  tooltip: string;
}

interface ColorFieldType extends FieldType {
  inputControl: ColorInputControl;
  predefinedValue: string;
  tooltip: string;
}

interface SearchLocationFieldType extends FieldType {
  inputControl: SearchLocationInputControl;
  predefinedValue: string;
  placeholder: string;
  tooltip: string;
}

interface SeparatorFieldType extends FieldType {
  inputControl: SeparatorInputControl;
  tooltip: string;
}

type AllFieldsType =
  | ParagraphFieldType
  | TextFieldType
  | SelectFieldType
  | RadioFieldType
  | CheckboxMultipleFieldType
  | GridFieldType
  | DateFieldType
  | DateTimeFieldType
  | NumericFieldType
  | CheckboxFieldType
  | ImageFieldType
  | RichTextFieldType
  | DocumentLibraryFieldType
  | ColorFieldType
  | SearchLocationFieldType
  | SeparatorFieldType;

//---------------------------------------------------------------

export type FormPageType = {
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
