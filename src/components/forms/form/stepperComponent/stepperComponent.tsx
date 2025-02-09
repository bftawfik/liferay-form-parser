import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Box from "@mui/system/Box";
import { FormPageType } from "../../../../types/forms";
import Button from "@mui/material/Button";
import { Page } from "../page/page";
import { FormField } from "../FormField";

interface StepperComponentProps {
  pages: FormPageType[];
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
}
export const StepperComponent: React.FC<StepperComponentProps> = ({
  pages,
  activeStep,
  handleBack,
  handleNext,
}) => {
  const activePage = pages[activeStep];
  return (
    <Box sx={{ width: "100%" }}>
      {pages.length > 1 && (
        <Stepper activeStep={activeStep}>
          {pages.map((page, ndx) => (
            <Step key={ndx + page.headline}>
              <StepLabel>{page.headline || `Page ${ndx}`}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}

      <Box sx={{ width: "100%" }}>
        <Page headline={activePage.headline} text={activePage.text}>
          {activePage.formFields.map((formField) => (
            <FormField key={formField.name} formData={formField} />
          ))}
        </Page>
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

          <Button onClick={handleNext}>
            {activeStep === pages.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button onClick={handleNext}>Finish</Button>
        </Box>
      )}
    </Box>
  );
};
