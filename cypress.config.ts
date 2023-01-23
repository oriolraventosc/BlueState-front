import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.CYPRESS_DOGS_APP;

export default defineConfig({
  env: {
    apiUrl: process.env.REACT_APP_URL,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: url,
  },
});
