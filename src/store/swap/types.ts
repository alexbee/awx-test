export enum Field {
  INPUT = "INPUT",
  OUTPUT = "OUTPUT",
}

export type Token = { symbol: string; name: string };

export type TokensByField = { [field in Field]: Token };
