import { LogLevelType, StructuredLogMessageType } from "../types";

const logStructuredMess = (
  level: LogLevelType,
  msg: string,
  serializedData: string | null,
  service: string
): void => {
  const mess: StructuredLogMessageType = {
    level,
    msg,
    serializedData,
    service,
  };
  const logged = JSON.stringify(mess);
  switch (level) {
    case "CRITICAL":
    case "ERROR":
      console.error(logged);
      break;
    case "DEBUG":
      console.debug(logged);
      break;
    case "INFO":
      console.info(logged);
      break;
    case "WARNING":
      console.warn(logged);
      break;
    default:
      console.log(logged);
      break;
  }
};

export default logStructuredMess;
