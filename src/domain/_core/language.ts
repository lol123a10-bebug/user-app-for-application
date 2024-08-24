export type Language = "ru" | "en";

export type MultiLanguage = {
  [language in Language]: string;
};
