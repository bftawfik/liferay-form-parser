import {
  AllLanguages,
  CheckboxFieldType,
  CheckboxMultipleFieldType,
  ColorFieldType,
  DateFieldType,
  DateTimeFieldType,
  DocumentLibraryFieldType,
  FieldType,
  ImageFieldType,
  NumericFieldType,
  ParagraphFieldType,
  RadioFieldType,
  SelectFieldType,
  SeparatorFieldType,
  TextFieldType,
} from "../../../../types/forms";
import TextField from "../allFormFields/textField/TextField";
import CheckBoxMultiple from "../allFormFields/checkBoxMultiple/CheckBoxMultiple";
import DropDownList from "../allFormFields/dropDownList/DropDownList";
import SingleCheckbox from "../allFormFields/singleCheckbox/SingleCheckbox";
import Numeric from "../allFormFields/numeric/Numeric";
import SingleSelection from "../allFormFields/singleSelection/SingleSelection";
import DateFormField from "../allFormFields/dateFormField/DateFormField";
import DateAndTimeField from "../allFormFields/dateTimeField/DateAndTimeField";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import UploadFiles from "../allFormFields/uploadFiles/UploadFiles";
import ParagraphField from "../allFormFields/paragraphField/ParagraphField";
import Separator from "../allFormFields/seperator/Seperator";
import {
  PARAGRAPH,
  TEXT,
  SELECT,
  RADIO,
  CHECKBOX_MULTIPLE,
  DATE,
  DATE_TIME,
  NUMERIC,
  CHECKBOX,
  DOCUMENT_LIBRARY,
  SEPARATOR,
  // GRID,
  IMAGE,
  // RICH_TEXT,
  COLOR,
  // SEARCH_LOCATION,
  // FIELDSET,
} from "../../../../constants/form";
import ColorSelector from "../allFormFields/colorSelector/ColorSelector";
import UploadImage from "../allFormFields/uploadImage/UploadImage";

interface FormFieldType {
  formData: FieldType;
  language: AllLanguages;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
export const FormField: React.FC<FormFieldType> = ({
  formData,
  language,
  register,
  errors,
}) => {
  let formSelection: JSX.Element | null = null;
  switch (formData?.type) {
    case CHECKBOX_MULTIPLE:
      formSelection = (
        <CheckBoxMultiple
          formData={formData as CheckboxMultipleFieldType}
          language={language}
        />
      );
      break;
    case RADIO:
      formSelection = (
        <SingleSelection
          formData={formData as RadioFieldType}
          language={language}
        />
      );
      break;
    case SELECT:
      formSelection = (
        <DropDownList
          formData={formData as SelectFieldType}
          language={language}
        />
      );
      break;
    case CHECKBOX:
      formSelection = (
        <SingleCheckbox
          formData={formData as CheckboxFieldType}
          language={language}
        />
      );
      break;
    case NUMERIC:
      formSelection = (
        <Numeric formData={formData as NumericFieldType} language={language} />
      );
      break;
    case TEXT:
      formSelection = (
        <TextField
          register={register}
          errors={errors}
          formData={formData as TextFieldType}
          language={language}
        />
      );
      break;
    case DATE:
      formSelection = (
        <DateFormField
          formData={formData as DateFieldType}
          language={language}
        />
      );
      break;
    case DATE_TIME:
      formSelection = (
        <DateAndTimeField
          formData={formData as DateTimeFieldType}
          language={language}
        />
      );
      break;
    case DOCUMENT_LIBRARY:
      formSelection = (
        <UploadFiles
          formData={formData as DocumentLibraryFieldType}
          language={language}
        />
      );
      break;
    case PARAGRAPH:
      formSelection = (
        <ParagraphField
          formData={formData as ParagraphFieldType}
          language={language}
          errors={errors}
          register={register}
        />
      );
      break;
    case SEPARATOR:
      formSelection = (
        <Separator
          formData={formData as SeparatorFieldType}
          language={language}
        />
      );
      break;
    case COLOR:
      formSelection = (
        <ColorSelector
          formData={formData as ColorFieldType}
          language={language}
        />
      );
      break;
    case IMAGE:
      formSelection = (
        <UploadImage
          formData={formData as ImageFieldType}
          language={language}
        />
      );
      break;
    default:
      formSelection = <div>no options</div>;
  }
  return <div className="mb-4">{formSelection}</div>;
};
