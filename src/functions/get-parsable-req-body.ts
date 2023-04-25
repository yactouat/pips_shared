export const getParsableReqBody = (reqBody: any): string | null => {
  try {
    const parsed = JSON.stringify(reqBody);
    return parsed;
  } catch (error) {
    return null;
  }
};
