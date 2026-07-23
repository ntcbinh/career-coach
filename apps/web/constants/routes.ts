export const ROUTES = {
  home: "/",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
