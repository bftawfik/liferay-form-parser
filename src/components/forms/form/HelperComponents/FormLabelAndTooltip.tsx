interface FormFieldLabelProps {
  label?: string;
  showLabel?: boolean;
  tooltip?: string;
  children: React.ReactNode;
}
export const FormLabelAndTooltip = ({
  label,
  showLabel,
  tooltip,
  children,
}: FormFieldLabelProps) => {
  return (
    <div>
      {showLabel && <h6 className="text-lg">{label}</h6>}
      {children}
      {tooltip && <h6 className="text-sm mt-2 text-gray-400">{tooltip}</h6>}
    </div>
  );
};
