import { ARABIC_SA, ENGLISH_US } from "../constants/lang";
import { AllLanguages } from "../types/forms";

export const getLanguage = (language: string | null): AllLanguages => {
  switch (language) {
    case "ar":
      return ARABIC_SA;
    case "en":
    default:
      return ENGLISH_US;
  }
};

export const getValueOf = (
  obj: { [key in AllLanguages]?: string },
  language: AllLanguages
): string => obj[language] ?? "";

export const getArrayValueOf = <T>(
  obj: { [key in AllLanguages]?: T },
  language: AllLanguages,
  exact: boolean = false
): T | undefined => obj[language];
