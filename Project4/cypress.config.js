import {
  defineConfig
} from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        seedDataBase(filename) {
          // Run your NodeJs code
          //e.g., edit a file here 
          return filename;
        }
      });
    },
  },
});