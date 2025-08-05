import { createRouter } from "@nanostores/router";

const baseUrl = "";

const routes = {
  home: `${baseUrl}`,
  login: `${baseUrl}/login`,
};

export const router = createRouter(routes);
