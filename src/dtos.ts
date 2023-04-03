import {
  ActionType,
  BlogPostStatusType,
  PendingUserModificationType,
  ResourceType,
  SocialHandleType,
  TokenType,
} from "./types";

/**
 * these shared DTOs are meant to be used by backends and frontends of the PIPS system
 */

export interface BlogPostDto {
  contents: string;
  date: string;
  slug: string;
  status: BlogPostStatusType;
  title: string;
}

export type BlogPostMetaDto = {
  date: string;
  slug: string;
  status: BlogPostStatusType;
  title: string;
};

export interface PendingUserModificationDto {
  committed_at?: string;
  created_at: string;
  id: number;
  field: PendingUserModificationType;
  value: string;
}

export interface PermissionDto {
  action: ActionType;
  id?: number;
  resource: ResourceType;
}

export interface TokenDto {
  id?: number;
  expired?: boolean;
  token: string;
  type: TokenType;
}

export interface UserDto {
  id?: number;
  email: string;
  hasPendingModifications?: boolean;
  socialHandle: string;
  socialHandleType: SocialHandleType;
  password: string | null;
  verified: boolean;
}
