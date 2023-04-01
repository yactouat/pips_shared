import { Client } from "pg";
import fs from "fs";

import { PgClientConfigType } from "./../types";

const getPgClient = (): Client => {
  // loading .env file only in development
  if (process.env.NODE_ENV === "development") {
    require("dotenv").config();
  }
  let pgClientConfig: PgClientConfigType = {
    database: process.env.PGDATABASE as string,
    host: process.env.PGHOST as string,
    user: process.env.PGUSER as string,
  };
  if (process.env.NODE_ENV !== "development") {
    pgClientConfig = {
      database: process.env.PGDATABASE as string,
      host: process.env.PGHOST as string,
      // this object will be passed to the TLSSocket constructor
      ssl: {
        ca: fs
          .readFileSync(
            process.env.SUPABASE_POSTGRES_ROOT_CERT_FILE_NAME as string
          )
          .toString(),
      },
    };
  }
  return new Client(pgClientConfig);
};

export default getPgClient;
