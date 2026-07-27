export const Roles = {
  ADMIN: "ADMIN",
  EDITOR: "EDITOR",
} as const;

export type Role =
  (typeof Roles)[keyof typeof Roles];