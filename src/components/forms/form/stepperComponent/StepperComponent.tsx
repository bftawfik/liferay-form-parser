import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Box from "@mui/system/Box";
import { AllLanguages, FormPageType } from "../../../../types/forms";
import Button from "@mui/material/Button";
import { FormPage } from "../formPage/FormPage";
import { FormField } from "../formField/FormField";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { getValueOf } from "../../../../helpers/lang";

interface StepperComponentProps {
  pages: FormPageType[];
  language: AllLanguages;
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
export const StepperComponent: React.FC<StepperComponentProps> = ({
  pages,
  language,
  activeStep,
  handleBack,
  handleNext,
  register,
  errors,
}) => {
  const activePage = pages[activeStep];
  return (
    <Box sx={{ width: "100%" }}>
      {pages.length > 1 && (
        <Stepper activeStep={activeStep}>
          {pages.map((page, ndx) => (
            <Step key={ndx + getValueOf(page.headline, language)}>
              <StepLabel>
                {getValueOf(page.headline, language) || `Page ${ndx}`}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      )}

      <Box sx={{ width: "100%" }}>
        {activePage && (
          <FormPage
            headline={getValueOf(activePage?.headline, language)}
            text={getValueOf(activePage?.text, language)}
          >
            {activePage?.fields.map((formField) => (
              <FormField
                key={formField.name}
                formData={formField}
                language={language}
                register={register}
                errors={errors}
              />
            ))}
          </FormPage>
        )}
      </Box>
      {pages.length > 1 ? (
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button
            onClick={activeStep === pages.length - 1 ? undefined : handleNext}
            type={activeStep === pages.length - 1 ? "submit" : "button"}
          >
            {activeStep === pages.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button type="submit">Submit</Button>
        </Box>
      )}
    </Box>
  );
};
