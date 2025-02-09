import React from "react";
interface ErrorMsgProps {
  message: string;
}
export const ErrorMsg: React.FC<ErrorMsgProps> = ({ message }) => {
  return <div>{message || "Error Message"}</div>;
};
