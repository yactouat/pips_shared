import { Client } from "pg";
import fs from "fs";
import logStructuredMess from "./functions/log-structured-mess";
import getParsableReqBody from "./functions/get-parsable-req-body";
import { PACKAGE_NAME } from "./constants";

export default class Migration {
  constructor(
    private readonly sqlFileName: string,
    private readonly pgClient: Client
  ) {}

  async up(): Promise<boolean> {
    let query = fs.readFileSync(`sql/${this.sqlFileName}`, "utf8");
    try {
      await this.pgClient.query(query);
    } catch (error) {
      logStructuredMess(
        "ERROR",
        "Migration up error",
        getParsableReqBody({ error, query, sqlFileName: this.sqlFileName }),
        PACKAGE_NAME
      );
      return false;
    }
    return true;
  }
}
