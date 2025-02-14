type DisplayStyle = "singleline" | "multiline" | "";

export type ParagraphInputControl = "paragraph";
export type TextInputControl = "text";
export type SelectInputControl = "select";
export type RadioInputControl = "radio";
export type CheckboxMultipleInputControl = "checkbox_multiple";
export type GridInputControl = "grid";
export type DateInputControl = "date";
export type DateTimeInputControl = "date_time";
export type NumericInputControl = "numeric";
export type CheckboxInputControl = "checkbox";
export type ImageInputControl = "image";
export type RichTextInputControl = "rich_text";
export type DocumentLibraryInputControl = "document_library";
export type ColorInputControl = "color";
export type SearchLocationInputControl = "search_location";
export type SeparatorInputControl = "separator";
export type FieldsetInputControl = "fieldset";

export type InputControl =
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
  | SeparatorInputControl
  | FieldsetInputControl;

interface GridType {
  columns: FormFieldOption[];
  rows: FormFieldOption[];
}

//---------------------------------------------------------------

interface StructureType {
  formPages: FormPageType[];
}

export interface FormDefinitionType {
  structure: StructureType;
}
//---------------------------------------------------------------

export type EnglishUS = "en_US";
export type ArabicSA = "ar_SA";
export type AllLanguages = EnglishUS | ArabicSA;

type ExpressionContains = "contains";
type ExpressionNotContains = "notContains";
type ExpressionEmail = "email";
type ExpressionGt = "gt";
type ExpressionEmpty = "";
type ExpressionFutureDates = "futureDates";
type ExpressionRegularExpression = "regularExpression";
export type ExpressionName =
  | ExpressionContains
  | ExpressionNotContains
  | ExpressionEmail
  | ExpressionGt
  | ExpressionFutureDates
  | ExpressionRegularExpression
  | ExpressionEmpty;

interface Expression {
  name: ExpressionName;
  value: string;
}

interface ValidationType {
  expression: Expression;
  parameter: Record<AllLanguages, string>;
  errorMessage: Record<AllLanguages, string>;
}

export interface FormFieldOption {
  label: { [key in AllLanguages]?: string };
  value: string;
  reference: string;
}

export interface FieldType {
  type: InputControl;
  dataType: string;
  label: { [key in AllLanguages]?: string };
  localizable: boolean;
  name: string;
  repeatable: boolean;
  required: boolean;
  showLabel: boolean;
  readOnly: boolean;
  indexType: string;
  fieldNamespace: string;
  visibilityExpression: string;
  fieldReference: string;
  tip: { [key in AllLanguages]?: string };
}

export interface FieldsetType extends FieldType {
  type: FieldsetInputControl;
  labelAtStructureLevel: boolean;
  ddmStructureLayoutId: string;
  predefinedValue: { [key in AllLanguages]?: string };
  ddmStructureKey: string;
  ddmStructureId: string;
  upgradedStructure: boolean;
  rows: any;
  collapsible: boolean;
  nestedFields: any;
  normalizedStructure: boolean;
}
export interface ParagraphFieldType extends FieldType {
  type: ParagraphInputControl;
  text: { [key in AllLanguages]?: string };
  predefinedValue: { [key in AllLanguages]?: string };
  rulesConditionDisabled: boolean;
}

export interface TextFieldType extends FieldType {
  type: TextInputControl;
  placeholder: { [key in AllLanguages]?: string };
  predefinedValue: { [key in AllLanguages]?: string };
  tooltip: { [key in AllLanguages]?: string };
  validation: ValidationType;
  ddmDataProviderInstanceId: string;
  ddmDataProviderInstanceOutput: string[];
  confirmationLabel: { [key in AllLanguages]?: string };
  displayStyle: DisplayStyle;
  requireConfirmation: boolean;
  hideField: boolean;
  confirmationErrorMessage: { [key in AllLanguages]?: string };
  direction: string[];
  autocomplete: boolean;
  htmlAutocompleteAttribute: string;
  options: FormFieldOption[];
  nativeField: boolean;
  labelAtStructureLevel: boolean;
  dataSourceType: string;
  objectFieldName: string;
  requiredErrorMessage: { [key in AllLanguages]?: string };
}

export interface SelectFieldType extends FieldType {
  type: SelectInputControl;
  predefinedValue: { [key in AllLanguages]?: string[] };
  labelAtStructureLevel: boolean;
  ddmDataProviderInstanceId: string;
  ddmDataProviderInstanceOutput: string[];
  alphabeticalOrder: boolean;
  options: FormFieldOption[];
  nativeField: boolean;
  multiple: boolean;
  dataSourceType: string;
  objectFieldName: string;
  requiredErrorMessage: { [key in AllLanguages]?: string };
}
export interface RadioFieldType extends FieldType {
  type: RadioInputControl;
  predefinedValue: { [key in AllLanguages]?: string };
  repeatable: boolean;
  required: boolean;
  showLabel: boolean;
  objectFieldName: string;
  inline: boolean;
  options: FormFieldOption[];
  nativeField: boolean;
  labelAtStructureLevel: boolean;
  requiredErrorMessage: { [key in AllLanguages]?: string };
}

export interface CheckboxMultipleFieldType extends FieldType {
  type: CheckboxMultipleInputControl;
  predefinedValue: { [key in AllLanguages]?: string[] };
  showAsSwitcher: boolean;
  labelAtStructureLevel: boolean;
  inline: boolean;
  options: FormFieldOption[];
  nativeField: boolean;
  objectFieldName: string;
  requiredErrorMessage: { [key in AllLanguages]?: string };
}

export interface GridFieldType extends FieldType {
  type: GridInputControl;
  grid: GridType;
  predefinedValue: { [key in AllLanguages]?: string };
  tooltip: { [key in AllLanguages]?: string };
}

export interface DateFieldType extends FieldType {
  type: DateInputControl;
  predefinedValue: { [key in AllLanguages]?: string };
  validation: ValidationType;
  labelAtStructureLevel: boolean;
  nativeField: boolean;
  htmlAutocompleteAttribute: string;
  objectFieldName: string;
  requiredErrorMessage: { [key in AllLanguages]?: string };
}

export interface DateTimeFieldType extends FieldType {
  type: DateTimeInputControl;
  predefinedValue: { [key in AllLanguages]?: string };
  labelAtStructureLevel: boolean;
  nativeField: boolean;
  htmlAutocompleteAttribute: string;
}

export interface NumericFieldType extends FieldType {
  type: NumericInputControl;
  placeholder: { [key in AllLanguages]?: string };
  predefinedValue: { [key in AllLanguages]?: string };
  tooltip: { [key in AllLanguages]?: string };
  characterOptions: boolean;
  requireConfirmation: boolean;
  confirmationErrorMessage: { [key in AllLanguages]?: string };
  numericInputMask: any;
  confirmationLabel: { [key in AllLanguages]?: string };
  htmlAutocompleteAttribute: string;
  validation: ValidationType;
  direction: string[];
  hideField: boolean;
  inputMask: boolean;
  inputMaskFormat: any;
  nativeField: boolean;
  labelAtStructureLevel: boolean;
  objectFieldName: string;
  requiredErrorMessage: { [key in AllLanguages]?: string };
}

export interface CheckboxFieldType extends FieldType {
  type: CheckboxInputControl;
  predefinedValue: { [key in AllLanguages]?: string };
  showAsSwitcher: boolean;
  tooltip: { [key in AllLanguages]?: string };
}

export interface ImageFieldType extends FieldType {
  type: ImageInputControl;
  predefinedValue: { [key in AllLanguages]?: string };
  objectFieldName: string;
  requiredDescription: boolean;
  requiredErrorMessage: { [key in AllLanguages]?: string };
}

export interface RichTextFieldType extends FieldType {
  type: RichTextInputControl;
  predefinedValue: { [key in AllLanguages]?: string };
  objectFieldName: string;
  requiredErrorMessage: { [key in AllLanguages]?: string };
}

export interface DocumentLibraryFieldType extends FieldType {
  type: DocumentLibraryInputControl;
  predefinedValue: { [key in AllLanguages]?: string };
  labelAtStructureLevel: boolean;
  allowGuestUsers: boolean;
  objectFieldName: string;
  requiredErrorMessage: { [key in AllLanguages]?: string };
}

export interface ColorFieldType extends FieldType {
  type: ColorInputControl;
  predefinedValue: { [key in AllLanguages]?: string };
  objectFieldName: string;
  requiredErrorMessage: { [key in AllLanguages]?: string };
}

export interface SearchLocationFieldType extends FieldType {
  type: SearchLocationInputControl;
  predefinedValue: { [key in AllLanguages]?: string };
  placeholder: { [key in AllLanguages]?: string };
  tooltip: { [key in AllLanguages]?: string };
}

export interface SeparatorFieldType extends FieldType {
  type: SeparatorInputControl;
  tooltip: { [key in AllLanguages]?: string };
}

export type AllFieldsType =
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
  | SeparatorFieldType
  | FieldsetType;

export type FormPageType = {
  fields: AllFieldsType[];
  headline: { [key in AllLanguages]?: string };
  text: { [key in AllLanguages]?: string };
};
interface SuccessPageType {
  body: { [key in AllLanguages]?: string };
  title: { [key in AllLanguages]?: string };
  enabled: boolean;
}
interface DefinitionType {
  availableLanguageIds?: AllLanguages[];
  successPage?: SuccessPageType;
  defaultLanguageId?: AllLanguages;
  formPages: FormPageType[];
}
export interface FormDefinitionType {
  definition: DefinitionType;
}
