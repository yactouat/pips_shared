import {
  BlogPostStatusType,
  SocialHandleType,
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
  initialStatus?: BlogPostStatusType;
  slug: string;
  status: BlogPostStatusType;
  title: string;
};

export interface UserDto {
  id?: number;
  email: string;
  hasPendingModifications?: boolean;
  socialHandle: string;
  socialHandleType: SocialHandleType;
  password: string | null;
  verified: boolean;
}