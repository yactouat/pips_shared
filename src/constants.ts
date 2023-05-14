export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:8080/`
    : `https://api.yactouat.com/`;
export const PACKAGE_NAME = "pips_shared";
