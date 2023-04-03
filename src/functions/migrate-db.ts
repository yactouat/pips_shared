import fs from "fs";
import Migration from "../Migration";

import getPgClient from "./get-pg-client";

const migrateDb = async () => {
  // scan `migrations` folder
  const sqlScripts = fs.readdirSync("sql");
  const pgClient = getPgClient();
  pgClient.connect();
  // run each migration in ascending order
  for (let i = 0; i < fs.readdirSync("sql").length; i++) {
    if (sqlScripts[i].endsWith(".sql")) {
      await new Migration(sqlScripts[i], pgClient).up();
    }
  }
  pgClient.end();
};

export default migrateDb;
