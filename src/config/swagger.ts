import { Options } from 'swagger-jsdoc';

export const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task API for Coally",
      version: "1.0.0",
      description: "A simple backend with mvc API for Coally",
      }
  },
  apis: ["./src/login/routes/*.ts", "./src/task/routes/*.ts"],
}