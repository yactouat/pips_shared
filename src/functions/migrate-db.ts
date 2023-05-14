import { Client } from "pg";
import { execSync } from "child_process";
import fs from "fs";

import getPgClient from "./get-pg-client";
import logStructuredMess from "./log-structured-mess";
import getParsableReqBody from "./get-parsable-req-body";
import { PACKAGE_NAME } from "../constants";

class Migration {
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

const migrateDb = async () => {
  // scan `migrations` folder
  const sqlScripts = fs.readdirSync("sql");
  const pgClient = getPgClient();
  pgClient.connect();
  // run each migration in ascending order
  for (let i = 0; i < sqlScripts.sort().length; i++) {
    if (sqlScripts[i].endsWith(".sql")) {
      await new Migration(sqlScripts[i], pgClient).up();
      execSync(`sleep 1`);
    }
  }
  pgClient.end();
};

export default migrateDb;
