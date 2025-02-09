import { Unstable_NumberInput as NumberInput } from "@mui/base";

export const Numeric = ({ label }: { label: string }) => {
  return (
    <div>
      <h6 className="text-lg">{label}</h6>
      <NumberInput
        aria-label="Demo number input"
        placeholder="Type a number…"
      />
    </div>
  );
};
