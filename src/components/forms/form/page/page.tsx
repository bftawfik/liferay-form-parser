import React from "react";

interface PageProps {
  children: React.ReactNode;
  headline?: string;
  text?: string;
}
export const Page: React.FC<PageProps> = ({ children, headline, text }) => {
  return (
    <div>
      {headline && <h3 className="text-2xl  mb-2 mt-4">{headline}</h3>}
      {text && <p>{text}</p>}
      <div className="p-2">{children}</div>
    </div>
  );
};
