import { Client } from "pg";
import fs from "fs";

export type APIResponseType = {
  msg: string;
  data: {}[] | {} | null;
};

export type BlogPostStatusType = "published" | "draft";

export type BuildStateType = "ERROR" | "READY" | "MASKED";

export class MigrationType {
  constructor(
    private readonly sqlFileName: string,
    private readonly pgClient: Client
  ) {}

  async up(): Promise<boolean> {
    let query = fs.readFileSync(`sql/${this.sqlFileName}`, "utf8");
    try {
      await this.pgClient.query(query);
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}

export type PendingUserModificationType = "email" | "password";

export type PgClientConfigType = {
  database: string;
  host: string;
  ssl?: {
    ca: string;
  };
  user?: string;
};

export type SocialHandleType = "GitHub" | "LinkedIn";

export type TokenType =
  | "User_Authentication"
  | "User_Deletion"
  | "User_Modification"
  | "User_Verification";

export type VercelDeploymentType = {
  aliasAssigned: number | null;
  aliasError: string | null;
  buildingAt: number | null;
  created: number | null;
  createdAt: number | null;
  creator: {
    email: string;
    githubLogin: string;
    uid: string;
    username: string;
  } | null;
  inspectorUrl: string;
  isRollbackCandidate: boolean | null;
  meta: {
    githubCommitAuthorLogin: string;
    githubCommitAuthorName: string;
    githubCommitMessage: string;
    githubCommitOrg: string;
    githubCommitRef: string;
    githubCommitRepo: string;
    githubCommitRepoId: string;
    githubCommitSha: string;
    githubDeployment: string;
    githubOrg: string;
    githubRepo: string;
    githubRepoId: string;
    githubRepoOwnerType: string;
  };
  name: string;
  ready: number;
  state: BuildStateType;
  type: string;
  uid: string;
  url: string;
};
