import React from "react";
interface ErrorMassageProps {
  message: string;
}
export const ErrorMassage: React.FC<ErrorMassageProps> = ({ message }) => {
  return <div>{message || "Error Message"}</div>;
};
