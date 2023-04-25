import { PACKAGE_NAME } from "../constants";
import getParsableReqBody from "./get-parsable-req-body";
import logStructuredMess from "./log-structured-mess";
import runPgQuery from "./run-pg-query";

const linkTokenToUserMod = async (
  userToken: string,
  userModId: number
): Promise<boolean> => {
  let tokenHasBeenLinked = false;
  try {
    // store token association with user in database
    await runPgQuery(
      `UPDATE pending_user_modifications 
           SET token_id = (SELECT id FROM tokens WHERE token = $1) 
           WHERE id = $2 RETURNING *`,
      [userToken, userModId.toString()]
    );
    tokenHasBeenLinked = true;
  } catch (error) {
    logStructuredMess(
      "ERROR",
      "linkTokenToUserMod error",
      getParsableReqBody({ error, userModId, userToken }),
      PACKAGE_NAME
    );
  }
  return tokenHasBeenLinked;
};

export default linkTokenToUserMod;
