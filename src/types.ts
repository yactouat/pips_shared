// supported actions on resources
export type BlogPostStatusType = "published" | "draft";

export type BuildStateType = "ERROR" | "READY" | "MASKED";

export type LogLevelType = "DEBUG" | "INFO" | "WARNING" | "ERROR" | "CRITICAL";

export type PgClientConfigType = {
  database: string;
  host: string;
  ssl?: {
    ca: string;
  };
  user?: string;
};

export type SocialHandleType = "GitHub" | "LinkedIn";

export type StructuredLogMessageType = {
  level: LogLevelType;
  msg: string;
  serializedData: string | null;
  service: string;
};

export type TokenType =
  | "User_Authentication"
  | "User_Deletion"
  | "User_Modification"
  | "User_Verification";

export type UserProfileModificationType =
  | "authtoken"
  | "deletetoken"
  | "modifytoken"
  | "veriftoken";

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