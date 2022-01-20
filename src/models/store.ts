// Root
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStore {}

export interface ILayout extends IStore {
  language: string | null;
  isMenuOpen: boolean;
  theme: string;
  mode: string;
}

export type Tlanguage = string | null;

export interface ILayoutPayload {
  field: string;
  value: boolean | string;
}
