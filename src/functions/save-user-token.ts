import generateToken from "./generate-token";
import getUserFromDbWithEmail from "./get-user-from-db-with-email";
import runPgQuery from "./run-pg-query";
import { TokenDto } from "./../dtos";
import { TokenType } from "./../types";
import logStructuredMess from "./log-structured-mess";
import getParsableReqBody from "./get-parsable-req-body";
import { PACKAGE_NAME } from "../constants";

const saveUserToken = async (
  userEmail: string,
  tokenType: TokenType
): Promise<string> => {
  let createdToken = "";
  // creating a token
  const newToken: TokenDto = {
    type: tokenType,
    token: generateToken(),
  };
  try {
    // get user linked to email
    const user = await getUserFromDbWithEmail(userEmail);
    if (user != null) {
      // store token in database
      const insertToken = await runPgQuery(
        "INSERT INTO tokens(token) VALUES ($1) RETURNING *",
        [newToken.token]
      );
      const token = insertToken.rows[0] as TokenDto;
      // store token association with user in database
      await runPgQuery(
        "INSERT INTO tokens_users(token_id, user_id, type) VALUES ($1, $2, $3) RETURNING *",
        [
          token.id ? token.id.toString() : "",
          user.id ? user.id.toString() : "",
          newToken.type.toLowerCase(),
        ]
      );
      createdToken = newToken.token;
    }
  } catch (error) {
    logStructuredMess(
      "ERROR",
      "saveUserToken error",
      getParsableReqBody({ error, tokenType, userEmail }),
      PACKAGE_NAME
    );
  }
  return createdToken;
};

export default saveUserToken;
