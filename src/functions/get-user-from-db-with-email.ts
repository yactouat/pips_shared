import { UserDto } from "./../dtos";
import runPgQuery from "./run-pg-query";

const getUserFromDbWithEmail = async (
  email: string,
  hideUserPassword = true
): Promise<UserDto | null> => {
  const userSelectQuery = await runPgQuery(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );
  let user: UserDto | null = null;
  if (userSelectQuery.rowCount > 0) {
    user = userSelectQuery.rows[0] as UserDto;
    user.password = hideUserPassword ? null : user.password;
  }
  return user;
};

export default getUserFromDbWithEmail;
